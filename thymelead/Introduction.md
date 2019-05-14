# Introduction Thymeleaf

Thymelead is a modern server-side java template engine for both web and standalone environments, capable processing HTML, XML, JavaScript, CSS and even plain text.

The main goal fo Tymeleaf is to provide an elegant and highly-maintanable way fo creating template. To achieve this, it builds on the concept of *Natural Templates*  to inject its logic into tamplate files in a way that does not affect the template from being used as design prototype. This improve communication af design and brigds the gap between design and development teams.

###What kind of templates can Tymeleaf process?

Out-of-the-box, Thymelead allows you to process six kinds of templates, each of which is called template mode:

- HTML
- XML
- TEXT
- JAVASCRIPT
- CSS
- RAW

There are two markup template mode (HTML, XML), three textural template mode (TEXT, JAVASCRIPT, CSS) and a no-op template mode (RAW).

### Dialects: The standard dialect

Tymeleaf is extremely extensible template engine, that allows you customize the way your template will be processed.

An object that apply some logic to a artefact is called **processor**, and a set of processor is what **dialect** is normally compised. Out of the box, tymeleaf's core library provides a dialect called the **Standard Dialect**.

# Thymeleaf + Spring

- thymeleaf-spring3
- thymeleaf-spring4

## Integrating thymeleaf with spring

Features:

- Map methods from Controllers to templates
- Use Spring Expression Language instead of OGNL in your templates
- Create forms in your template that are completly integrated with beans and result binds, including the use of property editors, conversion **services** and **validation** error handling.
- Display internatinalization message from message files managed by Spring
- Resolve your template using Spring's own resource resolution mechanism



# Thymeleaf tags

- **text** th:text="${param|session|application}"
  - Plain text
- **utext** th:utext="${param|session|application}"
  - Text on html format



Acessing attributes from context thymeleaf

- **${x}** - variable expression
- **#{x}** - value expression



# Standard Expression Sintaxy

Simple expression

- Variable expression **${...}**
- Selection variable expression ***{...}**
- Message expression **#{...}**
- Link URL expression **@{...}**
- Fragment expression **~{…}**

Literals

- Text **one text**
- Number **0, 34, 3.0, 12.3**
- Boolean literal **true, false**
- Null literal **null**

Arithmetic operations:

- Binary operators: `+`, `-`, `*`, `/`, `%`
- Minus sign (unary operator): `-`

Boolean operations:

- Binary operators: `and`, `or`
- Boolean negation (unary operator): `!`, `not`

Comparisons and equality:

- Comparators: `>`, `<`, `>=`, `<=` (`gt`, `lt`, `ge`, `le`)
- Equality operators: `==`, `!=` (`eq`, `ne`)

Conditional operators:

- If-then: `(if) ? (then)`
- If-then-else: `(if) ? (then) : (else)`
- Default: `(value) ?: (defaultvalue)`

Special tokens:

- No-Operation: `_`