export const fetchImages = async () => {
  try {
    // const apiKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

    // if (!apiKey) {
    //   throw new Error('Unsplash API key is missing');
    // }

    const response = await fetch(`https://api.unsplash.com/photos/?client_id=QumoDCJZFhyNUGMISdc_Ic0-VrwbFnDCtNQ_SvoF9eQ`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      images: data,
      total: null,
      totalPages: null,
      hasMore: true
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

