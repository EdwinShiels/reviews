var fs = require('fs');
var path = require('path');
var productsPath = path.join(__dirname, '../data/products.json');
var promptsPath = path.join(__dirname, '../data/prompts.json');
var outputDir = path.join(__dirname, '../pages/reviews');
var templatePath = path.join(__dirname, '../templates/ReviewPage.tsx');
var products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
var prompts = JSON.parse(fs.readFileSync(promptsPath, 'utf-8'));
var templateImport = "import ReviewPage from '../../templates/ReviewPage';\n";
function escapeProp(val) {
    return val.replace(/`/g, '\`').replace(/\\/g, '\\');
}
prompts.forEach(function (prompt) {
    var product = products.find(function (p) { return p.slug === prompt.productSlug; });
    if (!product)
        return;
    var props = {
        productName: product.name,
        title: prompt.title,
        metaDescription: prompt.metaDescription,
        angle: prompt.angle,
        affiliateLink: product.affiliateLink,
    };
    var fileContent = "".concat(templateImport, "\n\nexport default function Page() {\n  return <ReviewPage\n    productName={`").concat(escapeProp(props.productName), "`}\n    title={`").concat(escapeProp(props.title), "`}\n    metaDescription={`").concat(escapeProp(props.metaDescription), "`}\n    angle={`").concat(escapeProp(props.angle), "`}\n    affiliateLink={`").concat(escapeProp(props.affiliateLink), "`}\n  />;\n}\n");
    var outPath = path.join(outputDir, "".concat(prompt.productSlug, ".tsx"));
    fs.writeFileSync(outPath, fileContent, 'utf-8');
    console.log("Generated: /pages/reviews/".concat(prompt.productSlug, ".tsx"));
});
