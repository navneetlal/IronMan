import 'bootstrap';
import './scss/index.scss';

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })