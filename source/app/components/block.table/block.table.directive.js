import BlockTableController from './block.table.controller';
import blockTableHtml from './block.table.jade';

function BlockTableDirective () {
    return {
        restrict: 'AE',
        scope: {
            data: '='
        },
        controller: BlockTableController.name,
        controllerAs: 'tableCtrl',
        bindToController: true,
        template: blockTableHtml,
        replace: true
    };
}

BlockTableDirective.$inject = [];

export default BlockTableDirective;
