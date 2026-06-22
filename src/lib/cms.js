export const GET_HOMEPAGE_DATA = `
query GetHomepageData {
  page(id: "46", idType: DATABASE_ID) {
    homepageSlideshowFields {
      # Slide 1 Fields
      slide1Image {
        node {
          sourceUrl
        }
      }
      slide1Label
      slide1Line1
      slide1Line2

      # Slide 2 Fields
      slide2Image {
        node {
          sourceUrl
        }
      }
      slide2Tag
      slide2Title
      slide2Description01
      slide2Description02

      # Slide 3 Fields
      slide3Image {
        node {
          sourceUrl
        }
      }
      slide3Tag
      slide3Title
      slide3Description01
      slide3Description02

      # Slide 4 Fields
      slide4Image {
        node {
          sourceUrl
        }
      }
      slide4Tag
      slide4Title
      slide4Description01
      slide4Description02
    }
  }
}
`;

export const GET_NAVIGATION_DATA = `
query GetNavigationData {
  page(id: "quick-access-to-key-tools", idType: URI) {
    quickAccessToKeyTools {
      # === Laws & Permits Section ===
      lawsPermitsCard01Title
      lawsPermitsCard01Description
      lawsPermitsCard01Link
      lawsPermitsCard01Icon
      lawsPermitsCard02Title
      lawsPermitsCard02Description
      lawsPermitsCard02Link
      lawsPermitsCard02Icon
      lawsPermitsCard03Title
      lawsPermitsCard03Description
      lawsPermitsCard03Link
      lawsPermitsCard03Icon
      lawsPermitsCard04Title
      lawsPermitsCard04Description
      lawsPermitsCard04Link
      lawsPermitsCard04Icon
      lawsPermitsCard05Title
      lawsPermitsCard05Description
      lawsPermitsCard05Link
      lawsPermitsCard05Icon

      # === Literature Section ===
      literatureCardTitle01
      literatureCardDescription01
      literatureCardLink01
      literatureCardIcon01
      literatureCardTitle02
      literatureCardDescription02
      literatureCardLink02
      literatureCardIcon02
      literatureCardTitle03
      literatureCardDescription03
      literatureCardLink03
      literatureCardIcon03
      literatureCardTitle04
      literatureCardDescription04
      literatureCardLink04
      literatureCardIcon04

      # === Products Section ===
      productsCardTitle01
      productsCardDescription01
      productsCardLink01
      productsCardIcon01
      productsCardTitle02
      productsCardDescription02
      productsCardLink02
      productsCardIcon02
    }
  }
}
`;

export async function getNavigationFields() {
  try {
    const res = await fetch('https://cms.habctrl.info/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: GET_NAVIGATION_DATA }),
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`WordPress API returned status ${res.status}`);
    }

    const { data } = await res.json();
    // FIXED: Matched to the group name in your query layout above
    return data?.page?.quickAccessToKeyTools || null;
  } catch (error) {
    console.error("Navigation CMS Fetch Error:", error);
    return null; 
  }
}

export async function getHomepageFields() {
  try {
    const res = await fetch('https://cms.habctrl.info/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: GET_HOMEPAGE_DATA }),
      cache: 'no-store', 
    });

    if (!res.ok) {
      throw new Error(`WordPress API returned status ${res.status}`);
    }

    const { data } = await res.json();
    // FIXED: Matched to the group name in your query layout above
    return data?.page?.homepageSlideshowFields || null;
  } catch (error) {
    console.error("CMS Fetch Error:", error);
    return null; 
  }
}