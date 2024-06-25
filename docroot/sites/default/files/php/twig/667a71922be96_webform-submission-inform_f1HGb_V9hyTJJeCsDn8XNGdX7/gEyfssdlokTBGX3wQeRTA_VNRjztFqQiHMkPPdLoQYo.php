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

/* modules/webform/templates/webform-submission-information.html.twig */
class __TwigTemplate_9e5eb368a8245c7a8231ac1cfd5e8554 extends Template
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
        // line 33
        if (($context["submissions_view"] ?? null)) {
            // line 34
            echo "  <div><b>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Submission Number"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["serial"] ?? null), 34, $this->source), "html", null, true);
            echo "</div>
  <div><b>";
            // line 35
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Submission ID"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sid"] ?? null), 35, $this->source), "html", null, true);
            echo "</div>
  <div><b>";
            // line 36
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Submission UUID"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["uuid"] ?? null), 36, $this->source), "html", null, true);
            echo "</div>
  ";
            // line 37
            if (($context["uri"] ?? null)) {
                // line 38
                echo "    <div><b>";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Submission URI"));
                echo ":</b> ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["uri"] ?? null), 38, $this->source), "html", null, true);
                echo "</div>
  ";
            }
            // line 40
            echo "  ";
            if (($context["token_view"] ?? null)) {
                // line 41
                echo "    <div><b>";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Submission View"));
                echo ":</b> ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["token_view"] ?? null), 41, $this->source), "html", null, true);
                echo "</div>
  ";
            }
            // line 43
            echo "  ";
            if (($context["token_update"] ?? null)) {
                // line 44
                echo "    <div><b>";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Submission Update"));
                echo ":</b> ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["token_update"] ?? null), 44, $this->source), "html", null, true);
                echo "</div>
  ";
            }
            // line 46
            echo "  ";
            if (($context["token_delete"] ?? null)) {
                // line 47
                echo "    <div><b>";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Submission Delete"));
                echo ":</b> ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["token_delete"] ?? null), 47, $this->source), "html", null, true);
                echo "</div>
  ";
            }
            // line 49
            echo "  <br />
  <div><b>";
            // line 50
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Created"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["created"] ?? null), 50, $this->source), "html", null, true);
            echo "</div>
  <div><b>";
            // line 51
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Completed"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["completed"] ?? null), 51, $this->source), "html", null, true);
            echo "</div>
  <div><b>";
            // line 52
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Changed"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["changed"] ?? null), 52, $this->source), "html", null, true);
            echo "</div>
  <br />
  <div><b>";
            // line 54
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Remote IP address"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["remote_addr"] ?? null), 54, $this->source), "html", null, true);
            echo "</div>
  <div><b>";
            // line 55
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Submitted by"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["submitted_by"] ?? null), 55, $this->source), "html", null, true);
            echo "</div>
  <div><b>";
            // line 56
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Language"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["language"] ?? null), 56, $this->source), "html", null, true);
            echo "</div>
  <br />
  <div><b>";
            // line 58
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Is draft"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["is_draft"] ?? null), 58, $this->source), "html", null, true);
            echo "</div>
  ";
            // line 59
            if (($context["current_page"] ?? null)) {
                // line 60
                echo "    <div><b>";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Current page"));
                echo ":</b> ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["current_page"] ?? null), 60, $this->source), "html", null, true);
                echo "</div>
  ";
            }
            // line 62
            echo "  <div><b>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Webform"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["webform"] ?? null), 62, $this->source), "html", null, true);
            echo "</div>
  ";
            // line 63
            if (($context["submitted_to"] ?? null)) {
                // line 64
                echo "    <div><b>";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Submitted to"));
                echo ":</b> ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["submitted_to"] ?? null), 64, $this->source), "html", null, true);
                echo "</div>
  ";
            }
            // line 66
            echo "  ";
            if (((($context["sticky"] ?? null) || ($context["locked"] ?? null)) || ($context["notes"] ?? null))) {
                // line 67
                echo "    <br />
    ";
                // line 68
                if (($context["sticky"] ?? null)) {
                    // line 69
                    echo "      <div><b>";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Flagged"));
                    echo ":</b> ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["sticky"] ?? null), 69, $this->source), "html", null, true);
                    echo "</div>
    ";
                }
                // line 71
                echo "    ";
                if (($context["locked"] ?? null)) {
                    // line 72
                    echo "      <div><b>";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Locked"));
                    echo ":</b> ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["locked"] ?? null), 72, $this->source), "html", null, true);
                    echo "</div>
    ";
                }
                // line 74
                echo "    ";
                if (($context["notes"] ?? null)) {
                    // line 75
                    echo "      <div><b>";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Notes"));
                    echo ":</b><br/>
      <pre>";
                    // line 76
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["notes"] ?? null), 76, $this->source), "html", null, true);
                    echo "</pre>
      </div>
    ";
                }
                // line 79
                echo "  ";
            }
        } else {
            // line 81
            echo "  <div><b>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Submission Number"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["serial"] ?? null), 81, $this->source), "html", null, true);
            echo "</div>
  <div><b>";
            // line 82
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Created"));
            echo ":</b> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["created"] ?? null), 82, $this->source), "html", null, true);
            echo "</div>
";
        }
        // line 84
        echo "
";
        // line 85
        if (($context["delete"] ?? null)) {
            // line 86
            echo "  <br/>
  <div>";
            // line 87
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["delete"] ?? null), 87, $this->source), "html", null, true);
            echo "</div>
";
        }
        $this->env->getExtension('\Drupal\Core\Template\TwigExtension')
            ->checkDeprecations($context, ["submissions_view", "serial", "sid", "uuid", "uri", "token_view", "token_update", "token_delete", "created", "completed", "changed", "remote_addr", "submitted_by", "language", "is_draft", "current_page", "webform", "submitted_to", "sticky", "locked", "notes", "delete"]);    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "modules/webform/templates/webform-submission-information.html.twig";
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
        return array (  244 => 87,  241 => 86,  239 => 85,  236 => 84,  229 => 82,  222 => 81,  218 => 79,  212 => 76,  207 => 75,  204 => 74,  196 => 72,  193 => 71,  185 => 69,  183 => 68,  180 => 67,  177 => 66,  169 => 64,  167 => 63,  160 => 62,  152 => 60,  150 => 59,  144 => 58,  137 => 56,  131 => 55,  125 => 54,  118 => 52,  112 => 51,  106 => 50,  103 => 49,  95 => 47,  92 => 46,  84 => 44,  81 => 43,  73 => 41,  70 => 40,  62 => 38,  60 => 37,  54 => 36,  48 => 35,  41 => 34,  39 => 33,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/webform/templates/webform-submission-information.html.twig", "/var/www/html/docroot/modules/webform/templates/webform-submission-information.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 33);
        static $filters = array("t" => 34, "escape" => 34);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['t', 'escape'],
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
