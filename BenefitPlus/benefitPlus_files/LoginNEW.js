
(function ($) {
    "use strict";

    $.fn.initLoginNew = function () {
        
        $('.input-field').each(function () {

            $(this).on('blur', function () {
                if ($(this).val().trim() !== "")
                    $(this).addClass('has-value');
                else
                    $(this).removeClass('has-value');
            });
        });

        $("#BMTextBoxPassword").focus();    
        $("#BMTextBoxName").focus();

        if (location.href.indexOf("localhost") !== -1)
            $(".login-box-fake").removeClass("nodisplay");

        $.ajax({
            url: "../WS/DataService.asmx/GetLoginPageInfo",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                let out_snp_vis = true;

                if (document.getElementById("PanelInfoBox")) {
                    let out_text = null;

                    if (data && data.d)
                        out_text = data.d;

                    const snp_confirm_dt = document.getElementById("SNP_Confirm_DT");
                    const snp_confirm_delay = document.getElementById("SNP_Confirm_Delay");
                    const snp_info = document.getElementById("SNP_Info");

                    if (snp_confirm_dt && snp_confirm_dt.value
                        && snp_confirm_delay && snp_confirm_delay.value
                        && snp_info && snp_info.value) {

                        let dtConfirm = new Date(snp_confirm_dt.value);
                        let dtConfirm_ms = dtConfirm.getTime();
                        let dtConfirm_Delay_ms = parseInt(snp_confirm_delay.value);
                        let dtAct = new Date();
                        let dtConfirm_and_Delay = new Date((+dtConfirm_ms) + (+dtConfirm_Delay_ms));

                        if (dtConfirm_and_Delay > dtAct) {
                            out_text = snp_info.value;
                            out_snp_vis = false;
                        }
                    }

                    if (out_text) {
                        if (document.getElementById("LabelInfoBox"))
                            document.getElementById("LabelInfoBox").innerText = out_text;
                        document.getElementById("PanelInfoBox").className = "info-box-container";
                    } else {
                        document.getElementById("PanelInfoBox").className = "nodisplay";
                    }

                    if (out_snp_vis) {
                        if (document.getElementById("ButtonSendPassword"))
                            document.getElementById("ButtonSendPassword").style.visibility = "visible";
                    } else {
                        if (document.getElementById("ButtonSendPassword"))
                            document.getElementById("ButtonSendPassword").style.visibility = "hidden";
                    }
                }

                $("#popup-ok-button").on('click', function (e) {
                    hideInfo(e);
                });

                $("#help-button").on('click', function (e) {
                    toggleHelpPopup(e);
                });

                $(document).on('click', function (e) {
                    if ($("#help-button").css("display") === "none") toggleHelpPopup(e);
                });
            }
        });
        
        return this;
    };

    function toggleHelpPopup(e) {
        if (e.target.id === "ButtonVisitUs" || e.target.id === "ButtonEmailContact" || e.target.id === "ButtonPhoneContact") return;
        if ($("#help-popup").css("display") === "none") {
            $("#help-button").slideToggle('fast', 'swing', function () {
                $("#help-popup").slideToggle('fast', 'swing');
            });
        } else {
            $("#help-popup").slideToggle('fast', 'swing', function () {
                $("#help-button").slideToggle('fast', 'swing');
            });
        }
    }

    function hideInfo(e) {
        var modal = document.querySelector(".popup");
        modal.classList.toggle("show-popup");
    }

})(jQuery);

function showInfo(text) {
    var modal_text = document.getElementById('LabelMessage');
    modal_text.value = text;
    var modal = document.querySelector(".popup");
    modal.classList.toggle("show-popup");
}