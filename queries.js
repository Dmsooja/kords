export const blogArticlesGraphQuery =`
{
	homepage {
		slices {
			...on hero_section_card {
				variation {
					...on
					default {
						items {
							...itemsFields
						}
						primary {
							...primaryFields
						}
					}
				}
			}
			...on scrolling_cards {
				variation {
					...on
					default {
						items {
							...itemsFields
						}
						primary {
							...primaryFields
						}
					}
				}
			}
			...on featured_articles {
				variation {
					...on withContentRelationship {
						items {
							linked_article {
								on blog_article {
									...blog_articleFields
								}
							}
						}
					}
				}
			}
			...on accordion {
				variation {
					...on
					default {
						items {
							...itemsFields
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