jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"YVEGUI0004/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"YVEGUI0004/test/integration/pages/App",
	"YVEGUI0004/test/integration/pages/Browser",
	"YVEGUI0004/test/integration/pages/Master",
	"YVEGUI0004/test/integration/pages/Detail",
	"YVEGUI0004/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "YVEGUI0004.view."
	});

	sap.ui.require([
		"YVEGUI0004/test/integration/NavigationJourneyPhone",
		"YVEGUI0004/test/integration/NotFoundJourneyPhone",
		"YVEGUI0004/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});