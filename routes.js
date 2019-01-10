const Router = require("nextjs-dynamic-routes");

const router = new Router();

router.add({
  name: "index",
  pattern: "/"
});

router.add({
  name: "character",
  pattern: "/characters/:id"
});

router.add({
  name: "nomatch",
  pattern: "/*"
});

module.exports = router;
