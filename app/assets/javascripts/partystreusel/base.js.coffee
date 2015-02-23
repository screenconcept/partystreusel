#= require partystreusel/namespace
#= require partystreusel/ie_fixes
class Partystreusel.Base
  # you must override this class variable
  # constructor.name does not work in minified js
  @className = 'Base'

  @selector: ->
    prefix = Partystreusel.selectorPrefix || 'streusel'
    if Streusel.selectorType == 'css_class'
      ".#{prefix}-#{@className.toLowerCase()}"
    else
      "[data-#{prefix}-#{@className.toLowerCase()}]"

  @init: (element = $('body')) ->
    element.find(@selector())
      .filter (i, el) -> !($(el).data('object')?)
      .map (i, el) => new @(el)

  constructor: (el) ->
    @$el = $(el)
    @$el.data('object', @)
