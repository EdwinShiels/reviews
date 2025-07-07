const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../data/products.json');
const promptsPath = path.join(__dirname, '../data/prompts.json');
const outputDir = path.join(__dirname, '../pages/reviews');
const templatePath = path.join(__dirname, '../templates/ReviewPage.tsx');

const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const prompts = JSON.parse(fs.readFileSync(promptsPath, 'utf-8'));

const templateImport = `import ReviewPage from '../../templates/ReviewPage';\n`;

function escapeProp(val: string) {
  return val.replace(/`/g, '\`').replace(/\\/g, '\\');
}

prompts.forEach((prompt: any) => {
  const product = products.find((p: any) => p.slug === prompt.productSlug);
  if (!product) return;
  const props = {
    productName: product.name,
    title: prompt.title,
    metaDescription: prompt.metaDescription,
    angle: prompt.angle,
    affiliateLink: product.affiliateLink,
  };
  const fileContent = `${templateImport}

export default function Page() {
  return <ReviewPage
    productName={\`${escapeProp(props.productName)}\`}
    title={\`${escapeProp(props.title)}\`}
    metaDescription={\`${escapeProp(props.metaDescription)}\`}
    angle={\`${escapeProp(props.angle)}\`}
    affiliateLink={\`${escapeProp(props.affiliateLink)}\`}
  />;
}
`;
  const outPath = path.join(outputDir, `${prompt.productSlug}.tsx`);
  fs.writeFileSync(outPath, fileContent, 'utf-8');
  console.log(`Generated: /pages/reviews/${prompt.productSlug}.tsx`);
}); 