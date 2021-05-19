import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/information";
import InfoPreview from "./cms-preview-templates/info";
import ValuesPreview from "./cms-preview-templates/visualize";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("information", ProductsPreview);
CMS.registerPreviewTemplate("links", InfoPreview);
CMS.registerPreviewTemplate("visualize", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
