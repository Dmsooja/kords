export const authorGraphQuery =`
{
	blog_article {
		author {
			...on author {
				name
				image
			}
		}
		article_category
		article_excerpt
		article_publishing_date
		article_reading_time
		article_title
		article_update_timestamp
		featured_image
		uid
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
