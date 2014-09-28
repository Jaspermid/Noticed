/**
 * Created by Jasper on 05/09/14.
 */

Template.calendar.rendered = function() {
    $('#calendar').fullCalendar({
        // put your options and callbacks here
    })

}

Template.calendar.events ({

  'click .back': function(){
      window.history.back()
  }
})


