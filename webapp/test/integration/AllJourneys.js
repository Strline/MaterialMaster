/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"projectTwo/projectTwo/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"projectTwo/projectTwo/test/integration/pages/Worklist",
	"projectTwo/projectTwo/test/integration/pages/Object",
	"projectTwo/projectTwo/test/integration/pages/NotFound",
	"projectTwo/projectTwo/test/integration/pages/Browser",
	"projectTwo/projectTwo/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "projectTwo.projectTwo.view."
	});

	sap.ui.require([
		"projectTwo/projectTwo/test/integration/WorklistJourney",
		"projectTwo/projectTwo/test/integration/ObjectJourney",
		"projectTwo/projectTwo/test/integration/NavigationJourney",
		"projectTwo/projectTwo/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});