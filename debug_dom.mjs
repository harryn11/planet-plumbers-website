import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 800 });

    await page.goto('http://127.0.0.1:5173', { waitUntil: 'networkidle2' });

    // Scroll to bottom
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    // Wait to ensure everything renders
    await new Promise(r => setTimeout(r, 2000));

    // Find elements overlapping the footer
    const results = await page.evaluate(() => {
        const footer = document.querySelector('footer');
        if (!footer) return 'No footer found';

        const footerRect = footer.getBoundingClientRect();
        const overlappingElements = [];

        // Check all elements in the body
        const allElements = document.querySelectorAll('body *');

        for (const el of allElements) {
            if (footer.contains(el)) continue; // skip footer and its children

            const rect = el.getBoundingClientRect();

            // Check if it overlaps the footer
            if (
                rect.bottom > footerRect.top &&
                rect.top < footerRect.bottom &&
                rect.right > footerRect.left &&
                rect.left < footerRect.right
            ) {
                overlappingElements.push({
                    tag: el.tagName,
                    className: el.className,
                    id: el.id,
                    style: el.getAttribute('style') || '',
                    src: el.src || ''
                });
            }
        }

        return overlappingElements;
    });

    console.log(JSON.stringify(results, null, 2));

    await browser.close();
})();
