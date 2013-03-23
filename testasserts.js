/**
 * Created with JetBrains WebStorm.
 * User: jerome
 * Date: 3/23/13
 * Time: 11:52 PM
 * To change this template use File | Settings | File Templates.
 */
var casper = require('casper').create();

casper.start('http://casperjs.org/index.html', function() {
    this.test.assertExists('#about', 'ça marche !');
});



