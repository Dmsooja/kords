export const homeArticlesGraphQuery =`
{
	homepage {
		slices {
			...on hero_section_card {
				variation {
					...on default {
						items {
							...itemsFields
						}
						primary {
							...primaryFields
						}
					}
				}
			}
			...on nouha_heading {
				variation {
					...on default {
						items {
							...itemsFields
						}
						primary {
							...primaryFields
						}
					}
					...on withCta {
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
					...on default {
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
			...on accordion {
				variation {
					...on default {
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

export const blogArticlesGraphQuery =`
{
	blog {
		slices {
			...on logo_cloud {
				variation {
					...on default {
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