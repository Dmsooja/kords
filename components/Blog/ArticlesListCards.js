import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { linkResolver } from "../../prismicio";
import * as prismicH from "@prismicio/helpers";

export const ArticlesListCards = ({ article }) => {
    return (
      <div className="sm:flex sm:items-top">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 relative w-40 h-40">
            <PrismicLink
              document={article}
              linkResolver={linkResolver}
            >
              {prismicH.isFilled.image(article?.data?.featured_image) && (
                <PrismicNextImage
                  field={article.data.featured_image}
                  layout="fill"
                  className="rounded-md object-center object-cover"
                />
              )}
            </PrismicLink>
          </div>
        </div>
        <div>
          <PrismicLink
            document={article}
            linkResolver={linkResolver}
          >
            <div className="text-lg font-bold">
              <PrismicRichText field={article?.data?.article_title} />
            </div>
          </PrismicLink>
          <div className="mt-1 text-gray-500">
            <PrismicRichText field={article?.data?.article_excerpt} />
          </div>
        </div>
      </div>
    )
  }