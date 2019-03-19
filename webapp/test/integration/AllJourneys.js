jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 YEGUI0004_STRSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"YVEGUI0004/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"YVEGUI0004/test/integration/pages/App",
	"YVEGUI0004/test/integration/pages/Browser",
	"YVEGUI0004/test/integration/pages/Master",
	"YVEGUI0004/test/integration/pages/Detail",
	"YVEGUI0004/test/integration/pages/Create",
	"YVEGUI0004/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "YVEGUI0004.view."
	});

	sap.ui.require([
		"YVEGUI0004/test/integration/MasterJourney",
		"YVEGUI0004/test/integration/NavigationJourney",
		"YVEGUI0004/test/integration/NotFoundJourney",
		"YVEGUI0004/test/integration/BusyJourney",
		"YVEGUI0004/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});