$.jsoneditor.AbstractTheme = Class.extend({
  getFormInputLabel: function(text) {
    return $("<label>").text(text);
  },
  getCheckboxLabel: function(text) {
    return this.getFormInputLabel(text);
  },
  getHeader: function(text) {
    return $("<h3>").text(text);
  },
  getCheckbox: function() {
    return this.getFormInputField('checkbox');
  },
  getSelectInput: function(options) {
    var select = $("<select>");
    $.each(options, function(i,val) {
      select.append($("<option>").attr('value',val).text(val));
    });
    return select;
  },
  getTextareaInput: function() {
    return $("<textarea>");
  },
  getRangeInput: function(min,max,step) {
    return $("<input type='range'>")
      .attr('min',min)
      .attr('max',max)
      .attr('step',step);
  },
  getFormInputField: function(type) {
    return $("<input type='"+type+"'>");
  },
  afterInputReady: function(input) {
    
  },
  getFormControl: function(label, input, description) {
    return $("<div>")
      .append(label)
      .append(input)
      .append(description)
  },
  getIndentedPanel: function() {
    return $("<div>").css({
      paddingLeft: 10,
      marginLeft: 10,
      borderLeft: '1px solid #ccc'
    });
  },
  getChildEditorHolder: function() {
    return $("<div>");
  },
  getDescription: function(text) {
    return $("<p>").text(text);
  },
  getCheckboxDescription: function(text) {
    return this.getDescription(text);
  },
  getFormInputDescription: function(text) {
    return this.getDescription(text);
  },
  getHeaderButtonHolder: function() {
    return this.getButtonHolder();
  },
  getButtonHolder: function() {
    return $("<div>");
  },
  getButton: function(text) {
    return $("<button>").text(text);
  },
  setButtonText: function(button, text) {
    button.text(text);
  },
  getTable: function() {
    return $("<table></table>");
  },
  getTableRow: function() {
    return $("<tr></tr>");
  },
  getTableHead: function() {
    return $("<thead></thead>");
  },
  getTableBody: function() {
    return $("<tbody></tbody>");
  },
  getTableHeaderCell: function() {
    return $("<th></th>");
  },
  getTableCell: function() {
    return $("<td></td>");
  }
});