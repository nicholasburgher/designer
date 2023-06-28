import React from "react";
import Title from "../components/blocks/Title";
import Body from "../components/blocks/Body";
import Image from "../components/blocks/Image";
import HeadingDefault from "../components/blocks/HeadingDefault";
import Combination from "../components/blocks/Combination";
import Subheading from "../components/blocks/Subheading";
import List from "../components/blocks/List";
import Gallery from "../components/blocks/Gallery";
import Button from "../components/blocks/Button";
import Video from "../components/blocks/Video";
import YoutubeEmbed from "../components/blocks/YoutubeEmbed";

//const Body = React.lazy(() => import('../components/blocks/Body'));
//const Title = React.lazy(() => import('../components/blocks/Title'));
//const Image = React.lazy(() => import('../components/blocks/Image'));
//const Video = React.lazy(() => import('../components/blocks/Video'));


function buildBlock(item) {
    switch (item.component) {
        case "Title":
            return (
                <Title content={item.content} />
            )
        case "Heading":
            return (
                <HeadingDefault content={item.content} />
            )
        case "Subheading":
            return (
                <Subheading content={item.content} design={item.design} />
            )
        case "Body":
            return (
                <Body content={item.content} design={item.design} />
            )
        case "List":
            return (
                <List content={item.content} listType={item.listType} />
            )
        case "Image":
            return (
                <Image alt={item.alt} source={item.source} customClass={item.customClass}/>
            )
        case "Button":
            return (
                <Button content={item.content} destination={item.destination} design={item.design} target={item.target}/>
            )
        case "Combination":
            return (
                <Combination
                    design={item.design}
                    title={item.title}
                    content={item.content}
                    source={item.source}
                    alt={item.alt}
                    caption={item.caption}
                />
            )
        case "Gallery":
            return (
                <Gallery content={item.content} type={item.galleryType} />
            )
        case "Video":
            return (
                <Video source={item.source} autoplay={item.autoplay} />
            )
        case "YoutubeEmbed":
            return (
                <YoutubeEmbed embedId={item.embedId} startAt={item.startAt}/>
            )
        default:
            return (
                <Body content={item.content} />
            )
    }
}

export default buildBlock;