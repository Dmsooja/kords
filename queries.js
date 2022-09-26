export const authorGraphQuery =`
{
	blog_article {
		author {
			...on author {
				name
				image
			}
		}
		article_title
		uid
		article_category
		featured_image
		article_excerpt
		article_author_name
		article_author_link
		article_author_image
		article_reading_time
		article_publishing_date
		article_update_timestamp
		slices
	}
}
`

export const blogArticlesGraphQuery =`
{
	blog {
		slices {
			...on featured_articles {
				variation {
					...on withContentRelationship {
						items {
							linked_article {
								...on blog_article {
									...blog_articleFields
									author {
										...on author {
											name
											image
										}
									}
								}
							}
						}
						primary {
							...primaryFields
						}
					}
				}
			}
		}
	}
}
`

export const homeArticlesGraphQuery =`
{
	homepage {
		slices {
			...on featured_articles {
				variation {
					...on withContentRelationship {
						items {
							linked_article {
								...on blog_article {
									...blog_articleFields
									author {
										...on author {
											name
											image
										}
									}
								}
							}
						}
						primary {
							...primaryFields
						}
					}
				}
			}
		}
	}
}
`
