﻿var waitDialog;
waitDialog = waitDialog || (function () {
    var pleaseWaitDiv = $('<div class="modal hide" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false"><div class="modal-header"><h1>Processing...</h1></div><div class="modal-body"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>');
    return {
        showPleaseWait: function(pFunction) {
            //pleaseWaitDiv.modal();
        },
        hidePleaseWait: function (pFunction) {
            pleaseWaitDiv.modal('hide');
        },

    };
})();