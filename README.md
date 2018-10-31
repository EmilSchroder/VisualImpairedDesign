# VisualImpairedDesign

The end product will be a website, the goal is to see what makes a website good to use from a visually impaired perspective.

The website will be a tea journey. Frontend only.

## Descisions
html:
- font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
- default font size: 18pt;

Tea Journey Header:
- Background color: rgba(25, 3, 77, 1), a dark blue-purple
- Text Color: white
- Font-Family: 

## Why?

The web is for everyone.

## Where to start?

There are a number of resources that have guidelines on web design and css styling. w3.org has guidelines for accessibility requirements for people with low vision, the Blind Foundation list tips and tools for building a website with a blind or low vision audience in mind. There are also technologies like screen readers which work in tandem with well designed html and content to give access to site info. This readme will contain a list of the recommendations that will be implimented as part of the end product.

## What will make this website accessable?

### Fonts

#### Sizes
Blind Soc recommends an 18pt font size as the default minimum for large screen such as a laptop or PC monitor. Mobile operating systems like iOS and Android have accessability tools like magnification built into them, though the 18pt text should be kept standard for continuity across devices.

#### Styles
Unsurprisingly font styles that are clear and recognisable such as Arial, Tahoma and Veranda are much preferable to complicated, blockly or thin fonts. Blind Soc reports that there is not conclusive evidence around whether to go serif vs. sans-serif however sans-serif seems to be the more popular choice given the extra simplicity of the letter shapes and how much more it is used in the websites that are discussing this issue.

### Contrast

Poor contrast, such as grey text on a white background is pretty bad for most people including the visually impaired. Some readers need higher contrast levels than others, but as a general rule keeping contrast high will improve readability. Examples include black text on a white background or white text on a black background. There are some considerations to be made regarding contrast however:

#### Brightness

Brightness levels are very specific to the individual reader. Some readers are unable to read, or even pained, by too bright a background such as with black text on a white background. Others could be battling with screen glare meaning higher brightness is required to view the information. There are brightness settings that are able to be changed on phones and computers but having options available is important.

#### Colours

There are a number of forms of colourblindness, the three most common being Deuteranopia, Protanopia and Tritanopia which all effect different parts of the perceived colour spectrum. Monochromacy, where no colour is perceived, is more rare but also present. Stats from colourblindawareness.org report that globally 8% of men and 0.5% of women have colour vision deficiency with that number increasing in Pakeha. These colourblindness conditions are important to remember when creating constrasts as they may not be contrasting from different viewpoints. Colours also can not be relied on as call to actions or influencers on the page.

#### Consistency

Don't mix and match contrast styles, pick one and work with it. Thematically and visually this is the best approach.

### Formatting

#### Spacing & Grouping

Words, letters, paragraphs and sections need to follow the principles of readability and associability. Words and letters need to have a font where the distance between each unit is legible (not too close or too seperate) and with good spacing from borders. Paragraphs and sections need to group together so that they be associated together visually.

#### Images

Always write something for the alt text in any image tag. The alt text is what is read out by a screen reader in place of the audience seeing the image. It also is beneficial for SEO.

#### Page

Stick to a single column to make it easier to visually track the flow of infomation.

#### Content

Think of content from a non-visual perspective. Hypertext links should describe what they link to rather than just "click here". Text in images needs to be though about as it can not be enlarged via JS and could suffer from resolution issues when zoomed in on.


## Learnings
- Customisability - the community is diverse; do not prescibe styles, rather allow space for the individual to selelct what works for them
- Layout - Keep things VERY consistent. Do not mix centered headings with left-aligned text, focus on using single columns rather than spreading information over the page
- Colour - Keep in mind what everyone can see. There are filters for websites that allow you to see what a colourblind person would see.
- Audience - Larger than you think

## Key Links
- https://blindfoundation.org.nz/how-we-can-help/businesses-and-professionals/accessible-documents-and-websites/
- https://www.w3.org/TR/low-vision-needs/
- https://www.teachingvisuallyimpaired.com/font-legibility.html
- http://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/
- https://abcnz.org.nz/
