import React, { useState, useEffect } from 'react';
import Header from '../header';
import ScrollToTop from '../sub-components/scroll-to-top';
import Footer from '../footer';

// Loader component to show while images are loading
const Loader = () => {
    return (
        <div className="loader">
            <div></div>
        </div>
    );
};

class GalleryModal extends React.Component {
    constructor() {
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnMount() {
        document.body.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e.keyCode === 27)
            this.props.closeModal();
        if (e.keyCode === 37 && this.props.hasPrev)
            this.props.findPrev();
        if (e.keyCode === 39 && this.props.hasNext)
            this.props.findNext();
    }
    render() {
        const { closeModal, hasNext, hasPrev, findNext, findPrev, src, index, totalImages } = this.props;
        if (!src) {
            return null;
        }
        return (
            <div>
                <div className="modal-overlay" onClick={closeModal}></div>
                <div isopen={false} className="modal">
                    <div className='modal-body'>
                        <a href="#" className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown}>&times;</a>
                        {hasPrev && <a href="#" className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown}>&lsaquo;</a>}
                        {hasNext && <a href="#" className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown}>&rsaquo;</a>}
                        <img src={src}/>
                        <sup>{index+1}/{totalImages}</sup>
                    </div>
                </div>
            </div>
        )
    }
}
class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            currentIndex: null,
            images: [], // Store loaded images
        };
        this.closeModal = this.closeModal.bind(this);
        this.findNext = this.findNext.bind(this);
        this.findPrev = this.findPrev.bind(this);
        this.renderImageContent = this.renderImageContent.bind(this);
    }

    componentDidMount() {
        this.loadImages();
    }

    loadImages = async () => {
        try {
            const totalImages = 26;
            const loadedImages = [];

            const loadImage = (index) => {
                const img = new Image();
                img.src = `/images/events/ev-${index}.jpg`;
                img.onload = () => {
                    loadedImages.push(img);
                    if (loadedImages.length === totalImages) {
                        this.setState({ images: loadedImages, loading: false });
                    } else {
                        loadImage(index + 1);
                    }
                };
            };

            loadImage(1);

            // Simulate delay before setting loaded images
            await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (error) {
            console.error('Error loading images:', error);
            this.setState({ loading: false });
        }
    }

    renderImageContent(src, index) {
        return (
            <div onClick={(e) => this.openModal(e, index)} key={index}>
                <img src={src.src} alt={`Image ${index}`} />
            </div>
        );
    }

    openModal(e, index) {
        this.setState({ currentIndex: index });
    }

    closeModal(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState({ currentIndex: null });
    }

    findPrev(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex - 1,
        }));
    }

    findNext(e) {
        if (e !== undefined) {
            e.preventDefault();
        }
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex + 1,
        }));
    }

    render() {
        const { loading, images, currentIndex } = this.state;

        return (
            <>
                <Header />
                <ScrollToTop />
                <div className="aboutPage galleryPages">
                    <span>Events</span>
                    <h1>Darshiini, a Virtuoso in the Realm of Bharatanatyam</h1>
                    <div className="gallery-flex event-flex">
                        <img src="/images/events/event.jpg" alt="" width="300" />
                        <div>
                            <h2>Importance Performance</h2>
                            <ul>
                                <li>Sabha festivals ( parthasarathysabha, mylapore fine arts, gana mukundhapriya, vani mahal etc. )</li>
                                <li>TV shows ( vijay tv, mega tv etc )</li>
                                <li>Temple shows( inside and outside of Tamil nadu )</li>
                                <li>Dubai tamil sangam show</li>
                                <li>Instinct Singapore ( Bharataarpana production )</li>
                                <li>Freelancing </li>
                                <li>Natyanjali ( Chidambaram, pandanaloor, tiruvudaimarudur )</li>
                                <li>Chennaiyil thiruvaiyaru</li>
                            </ul>
                        </div>
                    </div>
                    <h2>A Gallery of Unforgettable Performances</h2>
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="gallery-grid">
                            {images.map((img, index) =>
                                this.renderImageContent(img, index)
                            )}
                        </div>
                    )}
                    <GalleryModal
                        closeModal={this.closeModal}
                        findPrev={this.findPrev}
                        findNext={this.findNext}
                        hasPrev={currentIndex > 0}
                        hasNext={currentIndex + 1 < images.length}
                        src={images[this.state.currentIndex]?.src}
                        index={this.state.currentIndex}
                        totalImages={images.length}
                    />
                </div>
                <Footer />
            </>
        );
    }
}

export default Events;