import angular from 'angular';

import BlockTableController from './block.table.controller';
import BlockTableDirective from './block.table.directive';

const blockTable = angular.module('app.components.block.table', [])
    .controller(BlockTableController.name, BlockTableController)
    .directive('iwBlockTable', BlockTableDirective);

export default blockTable;
