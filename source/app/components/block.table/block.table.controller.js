class BlockTableController {
    constructor ($state) {
        this.$state = $state;
        this.checked = false;
        this.checkAll = false;
        this.selected = false;
        this.totalSelected = 0;
    }

    _checkAll (selected) {
        this.selected = this.checkAll = this.checked = selected;
    }

    _checkRow (selected) {
        if (selected) {
            this.totalSelected++;
        } else {
            this.totalSelected--;
        }
        this.selected = (this.totalSelected > 0);
    }

    _goUserPage (slugPage) {
        const newPage = slugPage.replace('@', '-').replace('.', '-');
        this.$state.go('root.tableitem', {slug: newPage});
    }
}

BlockTableController.$inject = ['$state'];

export default BlockTableController;
