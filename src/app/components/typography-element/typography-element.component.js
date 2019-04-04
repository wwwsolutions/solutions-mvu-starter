/* DOCUMENT INFORMATION

  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX
  > XXXXXXXXXXXXXXXXXXXX

*//////////////////////////////////////////////////

// PUBLIC
function  typographyElement(dispatch, tagList, classList, contentList) {
  const [ containerTag, nestedTag ] = tagList;
  const [ className, descriptionClass ] = classList;
  const [ descriptionContent, tagContent ] = contentList;
  return containerTag({ className }, [
    nestedTag({ className: descriptionClass }, [descriptionContent]),
    nestedTag([tagContent])
  ]);
}

export default typographyElement;
