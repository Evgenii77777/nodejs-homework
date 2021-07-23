const express = require("express");
const router = express.Router();
const { controlValidation, controlValidationPath } = require("./validation");
const controller = require("../../controllers/contacts");
const { asyncWrapper } = require("../../helpers/async-wrapper");

router.get("/", asyncWrapper(controller.listContactsCont));

router.get("/:contactId", asyncWrapper(controller.getContactByIdCont));

router.post("/", controlValidation, asyncWrapper(controller.postContactCont));

router.delete("/:contactId", asyncWrapper(controller.deleteContactCont));

router.patch(
  "/:contactId",
  controlValidationPath,
  asyncWrapper(controller.patchContactCont)
);

router.patch(
  ":contactId/favorite",
  controlValidationPath,
  asyncWrapper(controller.patchFavoriteCont)
);

module.exports = router;
