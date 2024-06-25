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

/* modules/webform/templates/webform-help-support.html.twig */
class __TwigTemplate_7c57aac1d9537807e3669d5ece861b4c extends Template
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
        // line 7
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("webform/webform.help.support"), "html", null, true);
        echo "

<div class=\"webform-help-support\">
  <h2 class=\"webform-help-support__header\">";
        // line 10
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Getting involved and support options"));
        echo " <span class=\"webform-help-support__header-more\">(<a href=\"https://www.drupal.org/project/webform\">more information</a>)</span></h2>
  <div class=\"webform-help-support__items\">
    <div class=\"webform-help-support__item\">
      <span class=\"webform-help-support__item-icon webform-help-support__item-icon--contribute\" id=\"contribute-info-account\"></span>
      <div class=\"webform-help-support__item-details\">
        <h3 class=\"webform-help-support__item-title\">";
        // line 15
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Get involved"));
        echo "</h3>
        ";
        // line 16
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Get involved in the Drupal community and the Webform module. Review a patch, write documentation, contribute code, volunteer at an event, and more..."));
        echo "<br/>
        <a href=\"https://drupal.org/contribute\" class=\"button button--small button--primary webform-help-support__button\">";
        // line 17
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Contribute"));
        echo "</a><br/>
        <em>";
        // line 18
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Open to all"));
        echo "</em>
      </div>
    </div>
    <div class=\"webform-help-support__item\">
      <span class=\"webform-help-support__item-icon webform-help-support__item-icon--fund\" id=\"contribute-info-membership\"></span>
      <div class=\"webform-help-support__item-details\">
        <h3 class=\"webform-help-support__item-title\">";
        // line 24
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Fund development"));
        echo "</h3>
        ";
        // line 25
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Help fund the day-to-day tasks required to maintain the Webform module. Funds are used to triage issues, resolve security issues, and tag new releases."));
        echo "<br/>
        <a href=\"https://opencollective.com/webform\" class=\"button button--small button--primary webform-help-support__button\">";
        // line 26
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Fund"));
        echo "</a><br/>
        <em>";
        // line 27
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Starting at \$5 a month"));
        echo "</em>
      </div>
    </div>
    <div class=\"webform-help-support__item\">
      <span class=\"webform-help-support__item-icon webform-help-support__item-icon--contact\" id=\"contribute-info-contribution\"></span>
      <div class=\"webform-help-support__item-details\">
        <h3 class=\"webform-help-support__item-title\">";
        // line 33
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Professional support"));
        echo "</h3>
        ";
        // line 34
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Hire the Webform module's subject matter expert (SME) to ensure the success of your project. I can review your project plan, recommend solutions, and implement custom features."));
        echo "<br/>
        <a href=\"https://www.jrockowitz.com\" class=\"button button--small button--primary webform-help-support__button\">";
        // line 35
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Contact"));
        echo "</a><br/>
        <em>";
        // line 36
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Starting at \$800"));
        echo "</em>
      </div>
    </div>
  </div>
</div>
";
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "modules/webform/templates/webform-help-support.html.twig";
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
        return array (  107 => 36,  103 => 35,  99 => 34,  95 => 33,  86 => 27,  82 => 26,  78 => 25,  74 => 24,  65 => 18,  61 => 17,  57 => 16,  53 => 15,  45 => 10,  39 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/webform/templates/webform-help-support.html.twig", "/var/www/html/docroot/modules/webform/templates/webform-help-support.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 7, "t" => 10);
        static $functions = array("attach_library" => 7);

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape', 't'],
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
