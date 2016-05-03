$(document).ready(function() {
  $('.form-group label').addClass('control-label col-sm-3');
  $('.form-group input').addClass('form-control');
  $('.form-group select').addClass('form-control');
  $('label > .se-form-required-text').addClass('sr-only');
  $('#ctl05_rpControls_ctl08_fiControl_se_form').attr('type','date');
  $('.button-group input[type=submit]').addClass('btn btn-default hidden-print');
  $('.form-error > a').addClass('text-danger');

   $('.form-error').each(function(i) {
    if ( $(this).children('a').length > 0) {
      $(this).parents('.form-group').addClass('has-error');
    }
  });

  $('#studentWarning').modal('show');

});
