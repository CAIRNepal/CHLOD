<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/webform/templates/webform-confirmation.html.twig */
class __TwigTemplate_8d76c9a592775f49d003369e72d8a847 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 16
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("webform/webform.confirmation"), "html", null, true);
        echo "

";
        // line 18
        if (($context["progress"] ?? null)) {
            // line 19
            echo "  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["progress"] ?? null), 19, $this->source), "html", null, true);
            echo "
";
        }
        // line 21
        echo "
<div";
        // line 22
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", ["webform-confirmation"], "method", false, false, true, 22), 22, $this->source), "html", null, true);
        echo ">

  ";
        // line 24
        if (($context["message"] ?? null)) {
            // line 25
            echo "    <div class=\"webform-confirmation__message\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["message"] ?? null), 25, $this->source), "html", null, true);
            echo "</div>
  ";
        }
        // line 27
        echo "
  ";
        // line 28
        if (($context["back"] ?? null)) {
            // line 29
            echo "  <div class=\"webform-confirmation__back\">
    <a href=\"";
            // line 30
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["back_url"] ?? null), 30, $this->source), "html", null, true);
            echo "\" rel=\"prev\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["back_attributes"] ?? null), 30, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["back_label"] ?? null), 30, $this->source), "html", null, true);
            echo "</a>
  </div>
  ";
        }
        // line 33
        echo "
</div>
";
        $this->env->getExtension('\Drupal\Core\Template\TwigExtension')
            ->checkDeprecations($context, ["progress", "attributes", "message", "back", "back_url", "back_attributes", "back_label"]);    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "modules/webform/templates/webform-confirmation.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  86 => 33,  76 => 30,  73 => 29,  71 => 28,  68 => 27,  62 => 25,  60 => 24,  55 => 22,  52 => 21,  46 => 19,  44 => 18,  39 => 16,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/webform/templates/webform-confirmation.html.twig", "/var/www/html/docroot/modules/webform/templates/webform-confirmation.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 18);
        static $filters = array("escape" => 16);
        static $functions = array("attach_library" => 16);

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
                ['attach_library']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
