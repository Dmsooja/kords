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