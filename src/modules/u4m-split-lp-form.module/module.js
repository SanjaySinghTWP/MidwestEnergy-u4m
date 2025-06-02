{% if module.intro_content.include_eyebrow %}
	<!-- HTML to show when checked -->
{% endif %}
{% inline_text field="intro_content.eybrow_text" value="{{ module.intro_content.eybrow_text }}" %}
{% if module.intro_content.include_heading %}
	<!-- HTML to show when checked -->
{% endif %}
{{ module.intro_content.heading_size }}
{% inline_text field="intro_content.heading" value="{{ module.intro_content.heading }}" %}
{% if module.intro_content.include_content %}
	<!-- HTML to show when checked -->
{% endif %}
{% inline_rich_text field="intro_content.content" value="{{ module.intro_content.content }}" %}
{% if module.intro_content.include_button %}
	<!-- HTML to show when checked -->
{% endif %}
{% for item in module.intro_content.button_group %}
	{{ item.button_type }}
	{{ item.button_style }}
	{% inline_text field="button_text" value="{{ item.button_text }}" %}
	{% set href = item.link.url.href %}
	{% if item.link.url.type is equalto "EMAIL_ADDRESS" %}
	  {% set href = "mailto:" + href %}
	{% endif %}
	<a
	  {% if item.link.url.type is equalto "CALL_TO_ACTION"  %}
	    href="{{ href }}" {# The href here is not escaped as it is not editable and functions as a JavaScript call to the associated CTA #}
	  {% else %}
	    href="{{ href|escape_url }}"
	  {% endif %}
	  {% if item.link.open_in_new_tab %}
	    target="_blank"
	  {% endif %}
	  {% if item.link.rel %}
	    rel="{{ item.link.rel|escape_attr }}"
	  {% endif %}
	  >
	  Link text
	</a>
	{% cta guid="{{ item.cta }}" %}
{% endfor %}