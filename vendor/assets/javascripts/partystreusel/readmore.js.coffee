#= require partystreusel/base

class Readmore extends Partystreusel.Base

  constructor: (el) ->
    super

    @contentDiv = $('<div/>')
      .append(@$el.contents())
      .addClass('hide')
    @$el.append(@contentDiv)

    @button = @renderButton('open')
    $(@button).bind 'click', @toggle
    @$el.append(@button)

  toggle: (event) =>
    @button.toggleClass('open close')
    @button.text(@buttonText())
    @contentDiv.slideToggle =>
      @contentDiv.toggleClass('hide')
      @contentDiv.css('display', "")
      @contentDiv.removeAttr('style') if @contentDiv.attr('style') == ''
    return false

  buttonState: ->
    classes = @button.attr('class').split(' ')
    classes = classes.filter (v) -> v != 'button'
    classes[0]

  buttonText: (state = @buttonState()) ->
    I18n.readmore[state]

  renderButton: (state) =>
    text = @buttonText(state)

    $('<a></a>')
      .addClass(state + ' button')
      .attr('href', '#')
      .html(text)

Partystreusel.Readmore = Readmore
