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

/* core/themes/olivero/templates/form/details.html.twig */
class __TwigTemplate_79b6bd0e3c3c88f79039fde119e6cd9d extends Template
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
        // line 20
        $context["classes"] = ["olivero-details"];
        // line 25
        $context["content_wrapper_classes"] = ["olivero-details__wrapper", "details-wrapper"];
        // line 30
        echo "<details";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [($context["classes"] ?? null)], "method", false, false, true, 30), 30, $this->source), "html", null, true);
        echo ">";
        // line 31
        if (($context["title"] ?? null)) {
            // line 33
            $context["summary_classes"] = ["olivero-details__summary", ((            // line 35
($context["required"] ?? null)) ? ("js-form-required") : ("")), ((            // line 36
($context["required"] ?? null)) ? ("form-required") : (""))];
            // line 39
            echo "    <summary";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["summary_attributes"] ?? null), "addClass", [($context["summary_classes"] ?? null)], "method", false, false, true, 39), 39, $this->source), "html", null, true);
            echo ">";
            // line 40
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 40, $this->source), "html", null, true);
            // line 41
            if (($context["required"] ?? null)) {
                // line 42
                echo "<span class=\"required-mark\"></span>";
            }
            // line 44
            echo "</summary>";
        }
        // line 46
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content_attributes"] ?? null), "addClass", [($context["content_wrapper_classes"] ?? null)], "method", false, false, true, 46), 46, $this->source), "html", null, true);
        echo ">
    ";
        // line 47
        if (($context["errors"] ?? null)) {
            // line 48
            echo "      <div class=\"form-item form-item--error-message\">
        ";
            // line 49
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["errors"] ?? null), 49, $this->source), "html", null, true);
            echo "
      </div>
    ";
        }
        // line 52
        if (($context["description"] ?? null)) {
            // line 53
            echo "<div class=\"olivero-details__description\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["description"] ?? null), 53, $this->source), "html", null, true);
            echo "</div>";
        }
        // line 55
        if (($context["children"] ?? null)) {
            // line 56
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null), 56, $this->source), "html", null, true);
        }
        // line 58
        if (($context["value"] ?? null)) {
            // line 59
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["value"] ?? null), 59, $this->source), "html", null, true);
        }
        // line 61
        echo "</div>
</details>
";
        $this->env->getExtension('\Drupal\Core\Template\TwigExtension')
            ->checkDeprecations($context, ["attributes", "title", "required", "summary_attributes", "content_attributes", "errors", "description", "children", "value"]);    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "core/themes/olivero/templates/form/details.html.twig";
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
        return array (  100 => 61,  97 => 59,  95 => 58,  92 => 56,  90 => 55,  85 => 53,  83 => 52,  77 => 49,  74 => 48,  72 => 47,  67 => 46,  64 => 44,  61 => 42,  59 => 41,  57 => 40,  53 => 39,  51 => 36,  50 => 35,  49 => 33,  47 => 31,  43 => 30,  41 => 25,  39 => 20,);
    }

    public function getSourceContext()
    {
        return new Source("", "core/themes/olivero/templates/form/details.html.twig", "/var/www/html/docroot/core/themes/olivero/templates/form/details.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 20, "if" => 31);
        static $filters = array("escape" => 30);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['escape'],
                []
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
