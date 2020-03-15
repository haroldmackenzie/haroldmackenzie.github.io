function tstSsnSec() {
    let xhr = $.ajax({
            type: 'GET',
            url: "https://local.apitunego.com/ssn_sec",
            data: null,
            dataType: "json",
            success: function(data){
                $('#ssn_sec_value').text(data);
                $('#ssn_sec').show();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#ssn_sec_value').text("WE GOT AN ERROR: " + textStatus);
                $('#ssn_sec').show();
            }
        });
}

function tstSecSsn() {
    let xhr = $.ajax({
            type: 'GET',
            url: "https://local.apitunego.com/sec_ssn",
            data: null,
            dataType: "json",
            success: function(data){
                $('#sec_ssn_value').text(data);
                $('#sec_ssn').show();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#sec_ssn_value').text("WE GOT AN ERROR: " + textStatus);
                $('#sec_ssn').show();
            }
        });
}

$(document).on('click', '#ssn_sec_btn', function(){
// $('#ssn_sec_btn').click(function() {
    tstSsnSec();
});

$(document).on('click', '#sec_ssn_btn', function(){
// $('#sec_ssn_btn').click(function() {
    tstSecSsn();
});