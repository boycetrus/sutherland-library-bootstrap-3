$(document).ready(function() {
  $('.form-bootstrap .form-group > label').addClass('control-label col-sm-3');
  $('.form-bootstrap .form-group input[type="text"]').addClass('form-control');
  $('.form-bootstrap .form-group textarea').addClass('form-control');
  $('.form-bootstrap .form-group select').addClass('form-control');
  $('.form-bootstrap .checkbox-group td').addClass('checkbox');
  $('.form-bootstrap .checkbox-list input').each(function(){
    $(this).prependTo($(this).next('label'));
  });

  $('.form-bootstrap .se-form-required-text').addClass('sr-only');
  $('.form-bootstrap .button-group input[type=submit]').addClass('btn btn-primary');
  $('.form-bootstrap .form-error > a').addClass('text-danger');


   $('.form-error').each(function() {
    if ( $(this).children('a').length > 0) {
      $(this).parents('.form-group').addClass('has-error');
    }
  });

});
