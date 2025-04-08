from itertools import chain

import begin
from django import setup
from django.db.models import get_app, get_models
from django.db.models.fields.related import (ManyToManyRel, ManyToOneRel,
                                             OneToOneRel)
from django.template import Context, Template

# Heavily inspired by:
# https://djangosnippets.org/snippets/1506/
# https://github.com/BurntSushi/erd
# See also:
# https://code.djangoproject.com/wiki/DjangoGraphviz

# TODO:
# - Show cardinality of relationships
# - Use crow's foot notation
# - Style outside-of-app nodes
# - Show primary / candidate / foreign keys, including unique_together
# - Somehow handle M2Ms with through relationships
# - Show subclassed models
# - Show abstract models
# - Show blankability/nullability

DOT_TEMPLATE = r"""
{# Structure of this template was mercilessly pilfered from the output of "erd" #}
graph {
    graph [
        rankdir=LR
        splines=ortho
    ];
    node [
        label="\N",
        shape=plaintext
    ];
    edge [
        color=gray50,
        minlen=2
    ];
    {% for model in models %}
        {{model.name}} [
            label=<<FONT FACE="Helvetica">
                    <TABLE BORDER="0" CELLBORDER="1" CELLPADDING="4" CELLSPACING="0">
                        <TR>
                            <TD colspan='2'><b>{{model.name}}</b></TD>
                        </TR>
                        {% for field in model.fields %}
                            <tr>
                                <td>{{field.name}}</td>
                                <td>{{field.type}}</td>
                            </tr>
                        {% endfor %}
                    </TABLE>
                </FONT>>
        ];
    {% endfor %}
    {% for rel in rels %}
        {{rel.from}} -- {{rel.to}} [
            dir=both
            arrowhead={{rel.from_arrow}}
            arrowtail={{rel.to_arrow}}
        ]
    {% endfor %}
}
"""


def arrow_type(modality, cardinality):
    arrow_map = {
        '0': 'odot',
        '1': 'tee',
        'N': 'crow',
    }
    return '{}{}'.format(arrow_map[cardinality], arrow_map[modality])


@begin.start
def main(app_name=None):
    setup()

    if app_name is not None:
        app = get_app(app_name)
        models = get_models(app)
    else:
        models = get_models()

    context = {"models": [], "rels": []}

    for model in models:
        model_data = {
            "name": model.__name__,
            "fields": [],
        }
        context["models"].append(model_data)
        for field in chain(model._meta.fields, model._meta.local_many_to_many):  # noqa
            if field.rel:

                if isinstance(field.rel, OneToOneRel):
                    from_card, to_card = '1', '1'
                if isinstance(field.rel, ManyToOneRel):
                    from_card, to_card = '1', 'N'
                if isinstance(field.rel, ManyToManyRel):
                    from_card, to_card = 'N', 'N'

                from_mod, to_mod = '0', '0'
                if not (field.blank or isinstance(field.rel, ManyToManyRel)):
                    from_mod = '1'

                context["rels"].append({
                    "from": model.__name__,
                    "to": field.rel.to.__name__,
                    "from_card": '{}..{}'.format(from_mod, from_card),
                    "to_card": '{}..{}'.format(to_mod, to_card),
                    "from_arrow": arrow_type(from_mod, from_card),
                    "to_arrow": arrow_type(to_mod, to_card),
                })
            model_data["fields"].append({
                "name": field.name,
                "type": field.__class__.__name__
            })

    print(Template(DOT_TEMPLATE).render(Context(context)))
