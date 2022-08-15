import PropTypes from 'prop-types';
import { Aside } from 'views/Tags/BlockLevel';
import '../index.scss';

export const AsideBanner = ({ clazzName, alabel, backgroundImage, bannerLeft, bannerRight, button }) => {
    const ChildrenBackgroundImage = () => backgroundImage ? <>{ backgroundImage }</> : null;
    const ChildrenBannerLeft = () => <>{ bannerLeft }</>;
    const ChildrenBannerRight = () => <>{ bannerRight }</>;
    const ChildrenButton = () => button ? <>{ button }</> : null;
    return (
        <Aside className={clazzName} role='doc-tip' aria-label={alabel}>
            <ChildrenBackgroundImage />
            <ChildrenBannerLeft />
            <ChildrenBannerRight />
            <ChildrenButton />
        </Aside>
    );
}

AsideBanner.protoTypes = {
    clazzName: PropTypes.string.isRequired,
    alabel: PropTypes.string.isRequired,
    backgroundImage: PropTypes.node,
    aBannerLeft: PropTypes.node.isRequired,
    aBannerRight: PropTypes.node.isRequired,
    aButton: PropTypes.node
}
