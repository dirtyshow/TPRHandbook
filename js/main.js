function GetHtmlContent(component_id, page) {
    $.get(page, function (data) {
        $('#' + component_id).html(data);
    });
}