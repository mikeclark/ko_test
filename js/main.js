function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();    
    }, this);


    this.goToPage = function(page) { 
        this.chosenPageId(page);
        $.get('/mail', { folder: folder }, self.chosenFolderData);
    };
}

ko.applyBindings(new AppViewModel());

