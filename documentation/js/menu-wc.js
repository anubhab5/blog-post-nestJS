'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-946dfb867b9c05a0a060dff5658fffbdfb6d233f24629346482d9156a5649d3613da72e9c7834584377933a23aaee1a97e7262f287e70ef5e4336c0018bc0d2f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-946dfb867b9c05a0a060dff5658fffbdfb6d233f24629346482d9156a5649d3613da72e9c7834584377933a23aaee1a97e7262f287e70ef5e4336c0018bc0d2f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-946dfb867b9c05a0a060dff5658fffbdfb6d233f24629346482d9156a5649d3613da72e9c7834584377933a23aaee1a97e7262f287e70ef5e4336c0018bc0d2f"' :
                                            'id="xs-controllers-links-module-AppModule-946dfb867b9c05a0a060dff5658fffbdfb6d233f24629346482d9156a5649d3613da72e9c7834584377933a23aaee1a97e7262f287e70ef5e4336c0018bc0d2f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-946dfb867b9c05a0a060dff5658fffbdfb6d233f24629346482d9156a5649d3613da72e9c7834584377933a23aaee1a97e7262f287e70ef5e4336c0018bc0d2f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-946dfb867b9c05a0a060dff5658fffbdfb6d233f24629346482d9156a5649d3613da72e9c7834584377933a23aaee1a97e7262f287e70ef5e4336c0018bc0d2f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-946dfb867b9c05a0a060dff5658fffbdfb6d233f24629346482d9156a5649d3613da72e9c7834584377933a23aaee1a97e7262f287e70ef5e4336c0018bc0d2f"' :
                                        'id="xs-injectables-links-module-AppModule-946dfb867b9c05a0a060dff5658fffbdfb6d233f24629346482d9156a5649d3613da72e9c7834584377933a23aaee1a97e7262f287e70ef5e4336c0018bc0d2f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-ae237b6f397768aef2b1b6c46d2265268229ea58bbc1a18aa6f56ca66d320543b72f454c81aeb6e7b9334792f9cead958db0bd03b40504daeea442d56b3c6683"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-ae237b6f397768aef2b1b6c46d2265268229ea58bbc1a18aa6f56ca66d320543b72f454c81aeb6e7b9334792f9cead958db0bd03b40504daeea442d56b3c6683"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-ae237b6f397768aef2b1b6c46d2265268229ea58bbc1a18aa6f56ca66d320543b72f454c81aeb6e7b9334792f9cead958db0bd03b40504daeea442d56b3c6683"' :
                                            'id="xs-controllers-links-module-AuthModule-ae237b6f397768aef2b1b6c46d2265268229ea58bbc1a18aa6f56ca66d320543b72f454c81aeb6e7b9334792f9cead958db0bd03b40504daeea442d56b3c6683"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-ae237b6f397768aef2b1b6c46d2265268229ea58bbc1a18aa6f56ca66d320543b72f454c81aeb6e7b9334792f9cead958db0bd03b40504daeea442d56b3c6683"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-ae237b6f397768aef2b1b6c46d2265268229ea58bbc1a18aa6f56ca66d320543b72f454c81aeb6e7b9334792f9cead958db0bd03b40504daeea442d56b3c6683"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-ae237b6f397768aef2b1b6c46d2265268229ea58bbc1a18aa6f56ca66d320543b72f454c81aeb6e7b9334792f9cead958db0bd03b40504daeea442d56b3c6683"' :
                                        'id="xs-injectables-links-module-AuthModule-ae237b6f397768aef2b1b6c46d2265268229ea58bbc1a18aa6f56ca66d320543b72f454c81aeb6e7b9334792f9cead958db0bd03b40504daeea442d56b3c6683"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-c41348103592c5e1d35fd72fd8578a7642e3c57f523776191416253b49068698e940c7c3e295dc9cdd908f9bd0d9d24647a78a375244fb652df1b45b597cb837"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-c41348103592c5e1d35fd72fd8578a7642e3c57f523776191416253b49068698e940c7c3e295dc9cdd908f9bd0d9d24647a78a375244fb652df1b45b597cb837"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-c41348103592c5e1d35fd72fd8578a7642e3c57f523776191416253b49068698e940c7c3e295dc9cdd908f9bd0d9d24647a78a375244fb652df1b45b597cb837"' :
                                            'id="xs-controllers-links-module-PostsModule-c41348103592c5e1d35fd72fd8578a7642e3c57f523776191416253b49068698e940c7c3e295dc9cdd908f9bd0d9d24647a78a375244fb652df1b45b597cb837"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-c41348103592c5e1d35fd72fd8578a7642e3c57f523776191416253b49068698e940c7c3e295dc9cdd908f9bd0d9d24647a78a375244fb652df1b45b597cb837"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-c41348103592c5e1d35fd72fd8578a7642e3c57f523776191416253b49068698e940c7c3e295dc9cdd908f9bd0d9d24647a78a375244fb652df1b45b597cb837"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-c41348103592c5e1d35fd72fd8578a7642e3c57f523776191416253b49068698e940c7c3e295dc9cdd908f9bd0d9d24647a78a375244fb652df1b45b597cb837"' :
                                        'id="xs-injectables-links-module-PostsModule-c41348103592c5e1d35fd72fd8578a7642e3c57f523776191416253b49068698e940c7c3e295dc9cdd908f9bd0d9d24647a78a375244fb652df1b45b597cb837"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-7f0980ef8e04ab7d3273d7e48424b8d739d847a266341050fe2e260d683145e61a66074565a81a2e5ef891d9277250a06773503509a3e40c18f0b3d1e896c2fb"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-7f0980ef8e04ab7d3273d7e48424b8d739d847a266341050fe2e260d683145e61a66074565a81a2e5ef891d9277250a06773503509a3e40c18f0b3d1e896c2fb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-7f0980ef8e04ab7d3273d7e48424b8d739d847a266341050fe2e260d683145e61a66074565a81a2e5ef891d9277250a06773503509a3e40c18f0b3d1e896c2fb"' :
                                            'id="xs-controllers-links-module-UsersModule-7f0980ef8e04ab7d3273d7e48424b8d739d847a266341050fe2e260d683145e61a66074565a81a2e5ef891d9277250a06773503509a3e40c18f0b3d1e896c2fb"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-7f0980ef8e04ab7d3273d7e48424b8d739d847a266341050fe2e260d683145e61a66074565a81a2e5ef891d9277250a06773503509a3e40c18f0b3d1e896c2fb"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-7f0980ef8e04ab7d3273d7e48424b8d739d847a266341050fe2e260d683145e61a66074565a81a2e5ef891d9277250a06773503509a3e40c18f0b3d1e896c2fb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-7f0980ef8e04ab7d3273d7e48424b8d739d847a266341050fe2e260d683145e61a66074565a81a2e5ef891d9277250a06773503509a3e40c18f0b3d1e896c2fb"' :
                                        'id="xs-injectables-links-module-UsersModule-7f0980ef8e04ab7d3273d7e48424b8d739d847a266341050fe2e260d683145e61a66074565a81a2e5ef891d9277250a06773503509a3e40c18f0b3d1e896c2fb"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostsDto.html" data-type="entity-link" >CreatePostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostsMetaOptionsDto.html" data-type="entity-link" >CreatePostsMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});