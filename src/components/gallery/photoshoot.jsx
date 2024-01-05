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
                <div isopen={!!src} className="modal">
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
class Photoshoot extends React.Component {
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
            const totalImages = 40;
            const loadedImages = [];

            const loadImage = (index) => {
                const img = new Image();
                img.src = `/images/photoshoot/PS-${index}.jpg`;
                img.onload = () => {
                    loadedImages.push(img);
                    if (loadedImages.length === totalImages) {
                        this.setState({ images: loadedImages, loading: false }); // Update loading state when all images are loaded
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
                    <span>Photoshoot</span>
                    <h1>A Visual Symphony in Photography</h1>
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

export default Photoshoot;