sap.ui.define([
		"projectTwo/projectTwo/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("projectTwo.projectTwo.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);