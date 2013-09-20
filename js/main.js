function AppViewModel() {
    var self = this;
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();    
    }, this);

    this.dataName = ko.observable('');
    this.dataAddress = ko.observable('');
    this.dataCity = ko.observable('');
    this.dataState = ko.observable('');
    this.dataPhone = ko.observable('');
    this.dataEmail = ko.observable('');
    this.dataAge = ko.observable('');

    this.fillmydata = function() {
        $.getJSON("/api/data1/", function(data) { 
            self.dataName(data.name);
            self.dataCity(data.city);
            self.dataAddress(data.address);
            self.dataState(data.state);
            self.dataPhone(data.phone);
            self.dataEmail(data.email);
            self.dataAge(data.age);
        });
    };

}

ko.applyBindings(new AppViewModel());

