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
			...on demo_simple_heading {
				variation {
					...on default {
						items {
							...itemsFields
						}
						primary {
							...primaryFields
						}
					}
					...on withdescription {
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
			...on demo_simple_heading {
				variation {
					...on default {
						items {
							...itemsFields
						}
						primary {
							...primaryFields
						}
					}
					...on withdescription {
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