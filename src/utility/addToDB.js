import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    toast.error("Already exists in the read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    toast.success('Added to your read list');
  }
};

const getStoredWishlist = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredList2 = (id) => {
    const storedList = getStoredWishlist();
    if(storedList.includes(id)){
        toast.error('Already exists in the wishlist');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
        toast.success('Added to your wishlist');
    }
}

export { addToStoredList, addToStoredList2, getStoredReadList, getStoredWishlist };