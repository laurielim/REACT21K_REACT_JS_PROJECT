export const recipes = [
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 101,
		name: "old fashioned",
		image: "https://source.unsplash.com/qAegSdhKwnE/500x320",
		recipeCategory: "the unforgettables",
		description:
			"The old fashioned is a cocktail made by muddling sugar with bitters and water, adding whiskey or, less commonly, brandy, and garnishing with orange slice or zest and a cocktail cherry. It is traditionally served in an old fashioned glass (also known as rocks glass), which predated the cocktail.",
		recipeIngredient: [
			{ ingredient: "bourbon", quantity: "4.5 cl" },
			{ ingredient: "angostura bitters", quantity: "2 dashes" },
			{ ingredient: "sugar cube", quantity: "1" },
			{ ingredient: "plain water", quantity: "1 dash" },
		],
		recipeGarnish: "orange slice or zest, and cocktail cherry",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "place sugar cube in old fashioned glass.",
			},
			{
				"@type": "HowToStep",
				text: "saturate with bitters.",
			},
			{
				"@type": "HowToStep",
				text: "add a dash of plain water.",
			},
			{
				"@type": "HowToStep",
				text: "muddle until dissolved.",
			},
			{
				"@type": "HowToStep",
				text: "fill the glass with ice cubes and add whiskey.",
			},
			{
				"@type": "HowToStep",
				text: "garnish with lemon wedge.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 102,
		name: "dry martini",
		image: "https://source.unsplash.com/2ssSOO2pPK8/500x320",
		recipeCategory: "the unforgettables",
		description:
			"The martini is a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist. Over the years, the martini has become one of the best-known mixed alcoholic beverages. H. L. Mencken called the martini 'the only American invention as perfect as the sonnet', and E. B. White called it 'the elixir of quietude'.",
		recipeIngredient: [
			{ ingredient: "gin", quantity: "6 cl" },
			{ ingredient: "dry vermouth", quantity: "1 cl" },
		],
		recipeGarnish: "olive or lemon twist",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "pour gin and vermouth into mixing glass with ice cubes.",
			},
			{
				"@type": "HowToStep",
				text: "stir well.",
			},
			{
				"@type": "HowToStep",
				text: "strain in chilled martini cocktail glass.",
			},
			{
				"@type": "HowToStep",
				text:
					"squeeze oil from lemon peel onto the drink, or garnish with olive.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 103,
		name: "negroni",
		image: "https://source.unsplash.com/b-3uxA93zUc/500x320",
		recipeCategory: "the unforgettables",
		description:
			"The Negroni is a popular Italian cocktail, made of one part gin, one part vermouth rosso (red, semi-sweet), and one part Campari, garnished with orange peel. It is considered an apéritif. A traditionally made Negroni is stirred, not shaken, and built over ice in an old-fashioned or rocks glass and garnished with a slice of orange.",
		recipeIngredient: [
			{ ingredient: "gin", quantity: "3 cl" },
			{ ingredient: "sweet red vermouth", quantity: "3 cl" },
			{ ingredient: "campari", quantity: "3 cl" },
		],
		recipeGarnish: "orange slice",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "stir into glass over ice.",
			},
			{
				"@type": "HowToStep",
				text: "garnish and serve.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 104,
		name: "whiskey sour",
		image: "https://source.unsplash.com/psqaCoLj9QE/500x320",
		recipeCategory: "the unforgettables",
		description:
			"A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice (on the rocks), blended with ice (frozen margarita), or without ice (straight up).",
		recipeIngredient: [
			{ ingredient: "bourbon", quantity: "4.5 cl" },
			{ ingredient: "lemon juice", quantity: "3 cl" },
			{ ingredient: "simple syrup", quantity: "1.5 cl" },
		],
		recipeGarnish: "maraschino cherry and half orange slice",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "shake with ice.",
			},
			{
				"@type": "HowToStep",
				text: "strain into chilled glass, garnish and serve.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 105,
		name: "aviation",
		image: "https://source.unsplash.com/TYBvTbvjzL8/500x320",
		recipeCategory: "the unforgettables",
		description:
			"The Aviation is a classic cocktail made with gin, maraschino liqueur, crème de violette, and lemon juice. Some recipes omit the crème de violette. It is served straight up, in a cocktail glass.",
		recipeIngredient: [
			{ ingredient: "gin", quantity: "4.5 cl" },
			{ ingredient: "lemon juice", quantity: "1.5 cl" },
			{ ingredient: "maraschino liqueur", quantity: "1.5 cl" },
			{ ingredient: "crème de violette", quantity: "1 barspoon" },
		],
		recipeGarnish: "cherry",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "add all ingredients into cocktail shaker filled with ice.",
			},
			{
				"@type": "HowToStep",
				text: "shake well and strain into cocktail glass.",
			},
			{
				"@type": "HowToStep",
				text: "garnish with a cherry.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 106,
		name: "sazerac",
		image: "https://source.unsplash.com/CwUW0Ef88gE/500x320",
		recipeCategory: "the unforgettables",
		description:
			"The Sazerac is a local variation of a whiskey cocktail originally from New Orleans, named for the Sazerac de Forge et Fils brand of cognac brandy that served as its original main ingredient. The drink is most traditionally a combination of cognac or rye whiskey, absinthe, Peychaud's Bitters, and sugar. Some claim it is the oldest known American cocktail.",
		recipeIngredient: [
			{ ingredient: "cognac", quantity: "5 cl" },
			{ ingredient: "absinth", quantity: "1 cl" },
			{ ingredient: "sugar cube", quantity: "1" },
			{ ingredient: "peychaud's bitters", quantity: "2 dashes" },
		],
		recipeGarnish: "lemon peel",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text:
					"rinse a chilled old-fashioned glass with the absinthe, add crushed ice, and set it aside.",
			},
			{
				"@type": "HowToStep",
				text: "stir the remaining ingredients over ice and set it aside.",
			},
			{
				"@type": "HowToStep",
				text:
					"discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass.",
			},
			{
				"@type": "HowToStep",
				text: "add the lemon peel for garnish.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 107,
		name: "manhattan",
		image: "https://source.unsplash.com/bcXKAI-0Zx0/500x320",
		recipeCategory: "the unforgettables",
		description:
			"A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. While rye is the traditional whiskey of choice, other commonly used whiskies include Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey. The cocktail is usually stirred then strained into a cocktail glass and garnished traditionally with a maraschino cherry.",
		recipeIngredient: [
			{ ingredient: "rye whiskey", quantity: "5 cl" },
			{ ingredient: "sweet red vermouth", quantity: "2 cl" },
			{ ingredient: "angostura bitters", quantity: "1 dash" },
		],
		recipeGarnish: "maraschino cherry",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "stir over ice.",
			},
			{
				"@type": "HowToStep",
				text: "strain into a chilled glass.",
			},
			{
				"@type": "HowToStep",
				text: "garnish, and serve up.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 108,
		name: "clover club",
		image: "https://source.unsplash.com/Mh4J3n87798/500x320",
		recipeCategory: "the unforgettables",
		description:
			"The Clover Club Cocktail is a cocktail consisting of gin, lemon juice, raspberry syrup, and an egg white. The egg white is not added for the purpose of giving the drink flavor, but rather acts as an emulsifier. Thus when the drink is shaken a characteristic foamy head is formed.",
		recipeIngredient: [
			{ ingredient: "gin", quantity: "4.5 cl" },
			{ ingredient: "lemon juice", quantity: "1.5 cl" },
			{ ingredient: "raspberry syrup", quantity: "1.5 cl" },
			{ ingredient: "dry vermouth", quantity: "0.5 cl" },
			{ ingredient: "egg white", quantity: "1" },
		],
		recipeGarnish: "",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "dry shake ingredients to emulsify.",
			},
			{
				"@type": "HowToStep",
				text: "add ice, shake and served straight up.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 201,
		name: "bloody mary",
		image: "https://source.unsplash.com/m_7sQR2pDF8/500x320",
		recipeCategory: "contemporary classics",
		description:
			"A Bloody Mary is a cocktail containing vodka, tomato juice, and other spices and flavorings including Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and celery salt. In the United States, it is usually consumed in the morning or early afternoon, and is popular as a hangover cure.",
		recipeIngredient: [
			{ ingredient: "vodka", quantity: "4.5 cl" },
			{ ingredient: "tomato juice", quantity: "9 cl" },
			{ ingredient: "lemom juice", quantity: "1.5 cl" },
			{ ingredient: "worcestershire sauce", quantity: "2 dashes" },
			{ ingredient: "tabasco sauce", quantity: "" },
			{ ingredient: "black pepper", quantity: "" },
		],
		recipeGarnish: "celery stalk and lemon wedge",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "stirring gently, pour all ingredients into a tall glass.",
			},
			{
				"@type": "HowToStep",
				text: "garnish.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 202,
		name: "margarita",
		image: "https://source.unsplash.com/uE-BD8_Cx18/500x320",
		recipeCategory: "contemporary classics",
		description:
			"A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice (on the rocks), blended with ice (frozen margarita), or without ice (straight up).",
		recipeIngredient: [
			{ ingredient: "tequila", quantity: "5 cl" },
			{ ingredient: "triple sec", quantity: "2 cl" },
			{ ingredient: "lime juice", quantity: "1.5 cl" },
		],
		recipeGarnish: "lime slice and salt on the rim",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text:
					"rub the rim of the glass with the lime slice to make the salt stick to it.",
			},
			{
				"@type": "HowToStep",
				text: "pour all ingredients into shaker with ice.",
			},
			{
				"@type": "HowToStep",
				text: "shake well and strain into glass rimmed with salt.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 203,
		name: "mojito",
		image: "https://source.unsplash.com/J3ZJb0_JVEE/500x320",
		recipeCategory: "contemporary classics",
		description:
			"Mojito is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint. Its combination of sweetness, citrus, and herbaceous mint flavours is intended to complement the rum, and has made the mojito a popular summer drink.",
		recipeIngredient: [
			{ ingredient: "white", quantity: "4 cl" },
			{ ingredient: "lime juice", quantity: "3 cl" },
			{ ingredient: "mint", quantity: "6 sprigs" },
			{ ingredient: "sugar", quantity: "2 tsp" },
		],
		recipeGarnish: "sprig of mint, slice of lime",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "muddle mint leaves with sugar and lime juice.",
			},
			{
				"@type": "HowToStep",
				text: "add a splash of soda water and fill the glass with cracked ice.",
			},
			{
				"@type": "HowToStep",
				text: "pour the rum and top with soda water",
			},
			{
				"@type": "HowToStep",
				text: " garnish with sprig of mint leaves and lemon slice.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 204,
		name: "piña colada",
		image: "https://source.unsplash.com/ywS7HzUNjuM/500x320",
		recipeCategory: "contemporary classics",
		description:
			"The piña colada is a cocktail made with rum, cream of coconut or coconut milk, and pineapple juice, usually served either blended or shaken with ice. It may be garnished with either a pineapple wedge, maraschino cherry, or both. There are two versions of the drink, both originating in Puerto Rico.",
		recipeIngredient: [
			{ ingredient: "white rum", quantity: "3 cl" },
			{ ingredient: "coconut cream", quantity: "3 cl" },
			{ ingredient: "pineapple juice", quantity: "9 cl" },
		],
		recipeGarnish: "sprig of mint, slice of lime",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "blend all the ingredients with ice in an electric blender.",
			},
			{
				"@type": "HowToStep",
				text: "pour into a large goblet or Hurricane glass and serve.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 205,
		name: "caipirinha",
		image: "https://source.unsplash.com/CgaxttXM2Q0/500x320",
		recipeCategory: "contemporary classics",
		description:
			"Caipirinha is Brazil's national cocktail, made with cachaça (sugarcane hard liquor), sugar, and lime. The drink is prepared by mixing the fruit and the sugar together, then adding the liquor. This can be made in a single large glass to be shared among people, or in a larger jar, from which it is served in individual glasses.",
		recipeIngredient: [
			{ ingredient: "cachaça", quantity: "6 cl" },
			{ ingredient: "lime wedge", quantity: "3" },
			{ ingredient: "sugar", quantity: "3 tsp" },
		],
		recipeGarnish: "sugarcane",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "place lime and sugar into old fashioned glass.",
			},
			{
				"@type": "HowToStep",
				text:
					"mash the two ingredients together using a muddler or a wooden spoon.",
			},
			{
				"@type": "HowToStep",
				text: "fill the glass with ice and add the cachaça.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 206,
		name: "cosmopolitan",
		image: "https://source.unsplash.com/SZ8sdKmTR7c/500x320",
		recipeCategory: "contemporary classics",
		description:
			"A cosmopolitan, or informally a cosmo, is a cocktail made with vodka, triple sec, cranberry juice, and freshly squeezed or sweetened lime juice.",
		recipeIngredient: [
			{ ingredient: "vodka", quantity: "4 cl" },
			{ ingredient: "cointreau", quantity: "1.5 cl" },
			{ ingredient: "lime juice", quantity: "1.5 cl" },
			{ ingredient: "cranberry juice", quantity: "3 cl" },
		],
		recipeGarnish: "lime slice",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "shake all ingredients in cocktail shaker filled with ice.",
			},
			{
				"@type": "HowToStep",
				text: "strain into a large cocktail glass.",
			},
			{
				"@type": "HowToStep",
				text: "garnish with lime slice.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 301,
		name: "old cuban",
		image: "https://source.unsplash.com/WxCOofFRzH8/500x320",
		recipeCategory: "new era drinks",
		description:
			"The Old Cuban was created in 2001 by famed mixologist Audrey Saunders - it features dark rum, Mint and champagne and by that is something like a very fancy Mojito.",
		recipeIngredient: [
			{ ingredient: "rum", quantity: "4.5 cl" },
			{ ingredient: "lime juice", quantity: "2.25 cl" },
			{ ingredient: "simple syrup", quantity: "3 cl" },
			{ ingredient: "angostura bitters", quantity: "2 dashes" },
			{ ingredient: "mint leaves", quantity: "6 to 8" },
			{ ingredient: "champagne", quantity: "6 cl" },
		],
		recipeGarnish: "mint sprigs",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "pour all ingredients except the wine into cocktail shaker.",
			},
			{
				"@type": "HowToStep",
				text: "shake well with ice.",
			},
			{
				"@type": "HowToStep",
				text: "strain into chilled elegant cocktail glass.",
			},
			{
				"@type": "HowToStep",
				text: "top up with the sparkling wine and garnish with mint sprigs.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 302,
		name: "expresso martini",
		image: "https://source.unsplash.com/7D43yvQt960/500x320",
		recipeCategory: "new era drinks",
		description:
			"The espresso martini is a cold, coffee-flavored cocktail made with vodka, espresso coffee, coffee liqueur, and sugar syrup. It is not a true martini as it contains neither gin nor vermouth, but is one of many drinks that incorporate the term into their names.",
		recipeIngredient: [
			{ ingredient: "vodka", quantity: "5 cl" },
			{ ingredient: "kahlúa", quantity: "3 cl" },
			{ ingredient: "sugar syrup", quantity: "1 cl" },
			{ ingredient: "strong expresso", quantity: "1" },
		],
		recipeGarnish: "3 coffee beans",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "pour ingredients into shaker filled with ice.",
			},
			{
				"@type": "HowToStep",
				text: "shake vigorously.",
			},
			{
				"@type": "HowToStep",
				text: "strain into chilled martini glass.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 303,
		name: "spritz",
		image: "https://source.unsplash.com/L1U0oWEMEg4/500x320",
		recipeCategory: "new era drinks",
		description:
			"A Spritz Veneziano or Aperol Spritz, also called just Spritz, is an Italian wine-based cocktail, commonly served as an aperitif in Northeast Italy. It consists of prosecco, Aperol and soda water. The Aperol Spritz became widely popular outside of Italy around 2018 and was ranked as the world's 9th bestselling cocktail in 2019 by the website Drinks International.",
		recipeIngredient: [
			{ ingredient: "prosecco", quantity: "9 cl" },
			{ ingredient: "aperol", quantity: "6 cl" },
			{ ingredient: "soda water", quantity: "splash of" },
		],
		recipeGarnish: "orange slice",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "pour all ingredients into a wine glass filled with ice.",
			},
			{
				"@type": "HowToStep",
				text: "stir gently.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 304,
		name: "paloma",
		image: "https://source.unsplash.com/Z87Kux2xKt8/500x320",
		recipeCategory: "new era drinks",
		description:
			"The paloma is a tequila-based cocktail. This drink is most commonly prepared by mixing tequila, lime juice, and a grapefruit-flavored soda such as Fresca, Squirt, or Jarritos and served on the rocks with a lime wedge. Adding salt to the rim of the glass is also an option.",
		recipeIngredient: [
			{ ingredient: "tequila", quantity: "5 cl" },
			{ ingredient: "lime juice", quantity: "0.5 cl" },
			{ ingredient: "salt", quantity: "pinch of" },
		],
		recipeGarnish: "lime slice",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "pour tequila into a highball glass.",
			},
			{
				"@type": "HowToStep",
				text: "squeeze lime juice.",
			},
			{
				"@type": "HowToStep",
				text: "add ice and salt.",
			},
			{
				"@type": "HowToStep",
				text: "top with soda and stir gently.",
			},
		],
	},
	{
		"@context": "http://schema.org/",
		"@type": "Recipe",
		id: 305,
		name: "bramble",
		image: "https://source.unsplash.com/lwoTuByIuC4/500x320",
		recipeCategory: "new era drinks",
		description:
			"The Bramble is a cocktail created by Dick Bradsell in 1980s London, England. Best described as a spring cocktail, the Bramble brings together dry gin, lemon juice, sugar syrup, crème de mûre, and crushed ice. Bradsell also suggests finishing off the cocktail with some fresh red fruits (such as blackberries, cranberries) and a slice of lemon.",
		recipeIngredient: [
			{ ingredient: "gin", quantity: "5 cl" },
			{ ingredient: "lemon juice", quantity: "2.5 cl" },
			{ ingredient: "simple syrup", quantity: "1.25 cl" },
			{
				ingredient: "creme de mure (blackberry liqueur)",
				quantity: "1.5 cl",
			},
		],
		recipeGarnish: "blackberry, lime slice",
		recipeInstructions: [
			{
				"@type": "HowToStep",
				text: "fill glass with crushed ice.",
			},
			{
				"@type": "HowToStep",
				text: "build gin, lemon juice and simple syrup over.",
			},
			{
				"@type": "HowToStep",
				text:
					"stir, and then pour blackberry liqueur over in a circular fashion to create marbling effect. ",
			},
			{
				"@type": "HowToStep",
				text: "garnish with two blackberries and lemon slice.",
			},
		],
	},
];
