import { LandingBlock } from '@openware/react-components';
import * as React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Link, RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { IntlProps } from '../../';
import { Logo } from '../../components';
import { MarketsTable } from '../../containers';
import { toggleColorTheme } from '../../helpers';
import {
    RootState,
    selectCurrentColorTheme,
    selectUserLoggedIn,
} from '../../modules';
import { CustomizationSettingsInterface, LogoInterface } from '../../themes';

import FeaturesExchangeIcon from 'src/assets/images/landing/features/Exchange.svg';
import FeaturesTypesIcon from 'src/assets/images/landing/features/Types.svg';
import FeaturesCustomizeIcon from 'src/assets/images/landing/features/Customize.svg';
import FeaturesSecurityIcon from 'src/assets/images/landing/features/Security.svg';
import FeaturesCommunityIcon from 'src/assets/images/landing/features/Community.svg';
import FeaturesAPIIcon from 'src/assets/images/landing/features/API.svg';

import TelegramIcon from 'src/assets/images/landing/social/Telegram.svg';
import LinkedInIcon from 'src/assets/images/landing/social/LinkedIn.svg';
import TwitterIcon from 'src/assets/images/landing/social/Twitter.svg';
import YouTubeIcon from 'src/assets/images/landing/social/YouTube.svg';
import RedditIcon from 'src/assets/images/landing/social/Reddit.svg';
import FacebookIcon from 'src/assets/images/landing/social/Facebook.svg';
import MediumIcon from 'src/assets/images/landing/social/Medium.svg';
import CoinMarketIcon from 'src/assets/images/landing/social/CoinMarket.svg';

interface ReduxProps {
    isLoggedIn: boolean;
    colorTheme: string;
}

type Props = ReduxProps & RouteProps & IntlProps;

class Landing extends React.Component<Props> {
    public componentDidMount() {
        if (this.props.colorTheme === 'light') {
            toggleColorTheme('dark');
        }
    }

    public componentWillReceiveProps(next: Props) {
        if (next.colorTheme === 'light') {
            toggleColorTheme('dark');
        }
    }

    public componentWillUnmount() {
        if (this.props.colorTheme === 'light') {
            toggleColorTheme(this.props.colorTheme);
        }
    }

    public render() {
        return (
            <div className="pg-landing-screen">
                
                
                
                <LandingBlock
                    className="pg-landing-screen__trade-on-the-go"
                    contentClassName="pg-landing-screen__trade-on-the-go-content">
                    <div className="pg-landing-screen__trade-on-the-go__wrap">
                        <div className="pg-landing-screen__trade-on-the-go__wrap__image" />
                        <div className="pg-landing-screen__trade-on-the-go__wrap__content">
                            <h1>ROZEFX.com - Trusted - Secure - Transparent</h1>
                            <h2>{this.translate('page.body.landing.tradeOnTheGo.item.text1')}</h2>
                            <h2>{this.translate('page.body.landing.tradeOnTheGo.item.text2')}</h2>
                            <h2>{this.translate('page.body.landing.tradeOnTheGo.item.text3')}</h2>
                            <Link to="/signin" className="landing-button">
                                LogIn
                            </Link>
                            <Link to="/signup" className="landing-button">
                                {this.translate('page.body.landing.startTrading.button1')}
                            </Link>
                            <Link to="/trading/" className="landing-button landing-button--secondary">
                                {this.translate('page.body.landing.startTrading.button2')}
                            </Link>
                        </div>
                    </div>
                </LandingBlock>
               
            
            </div>
        );
    }

    private handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    private translate = (key: string) => this.props.intl.formatMessage({ id: key });
}

const mapStateToProps = (state: RootState): ReduxProps => ({
    isLoggedIn: selectUserLoggedIn(state),
    colorTheme: selectCurrentColorTheme(state),
});

export const LandingScreen = compose(
    injectIntl,
    withRouter,
    connect(mapStateToProps, null)
)(Landing) as React.ComponentClass;
