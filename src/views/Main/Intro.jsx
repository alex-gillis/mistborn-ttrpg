/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';

function Intro() 

    {const [spoilersVisible, setSpoilersVisible] = useState(false);
  
    function toggleSpoilers() {
        setSpoilersVisible(!spoilersVisible);
    }

    return (
      <>  
        <div>
            <div id="intro">
                <h1>Introduction to the Final Empire</h1>
                Imagine a world, much like our own a few hundred years ago — a world of men, of cobblestone roads and horse drawn carriages, of majestic manor houses and sprawling plantations and massive cities packed with soldiers and citizens, beggars and noblemen, artisans and thieves. <br/>
                <br/>
                But then imagine something has gone direly amiss. Thick black clouds blot out the sun, belched by titanic volcanoes dotting the horizon. Rather than rain, ash falls from the sky, always, every day... It stains the buildings, chokes the rivers, and blankets the land like a sea of stained snow. Imagine there are no flowers, no green grass or leafy trees — only stunted brown undergrowth struggling to reach the meager light of a dim red sky. <br/>
                <br/>
                Imagine that at night, roiling clouds of impenetrable mist materialize to swirl and dance in the streets, shrouding the stars and shrouding mortal danger for those foolish enough to venture out into the dark. Mindless mistwraiths — horrific beings that devour the dead to make of them a mockery of life — hunt intrepid wanderers, while savage gangs of bandits and rebels plunder barges and passersby for what little they carry. <br/>
                <br/>
                Imagine a society so repressive that police and priest, state and church are one, and that your ruler is not just a man but a god who sees, knows, and controls all. Imagine his grip on the land’s culture is so strong that he can stifle the march of technology, halt integration of the classes, and rule unopposed for a thousand years. Imagine that innovation, evolution, and ingenuity are replaced by duty, devotion, and above all, fealty. <br/>
                <br/>
                Imagine a world where wealth is not measured in gold, or connections, or status, but in secrets — where everyone and everything conceals something else. <br/>
                <br/>
                Imagine those secrets are valuable not for the information they offer, but the power they wield — that they can become weapons to destroy, shields to protect, and treasure so coveted that others would kill to see them buried forever. <br/>
                <br/>
                Imagine a power, hidden in a select few, that lets them use metal to soar through the air, perform superhuman feats of strength and speed, and manipulate emotions. Then imagine being hunted for that power, by creatures so brutal, so relentless they’ll stop at nothing to tear your very soul from your body. <br/>
                <br/>
                Imagine living in such a world — and choosing to fight against it. You fight to shrug off the bonds of oppression, fear, and entropy that poison the land and divide the people. Your opponents have every edge at their disposal: all the control, all the money, and divinity itself on their side, and still you don’t surrender. You fight to change the world, because if you can’t change it, it’s not worth saving. <br/>
                <br/>
                This is the world of Mistborn. <br/>
                
                <h2>**************</h2>
                Welcome to the Mistborn Adventure Game, a storytelling experience based on the New York Times best-selling novel series by Brandon Sanderson. With this book you can join one of Scadrial’s underground crews, a team of like-minded individuals drawn from all walks of society to pursue fame, fortune, or a greater cause you all share.<br/>
                <br/>
                Your hero brings special tools to the crew — possibly great fighting skill, a knack for politics, or command of Allomancy, Feruchemy, or Hemalurgy, the magic disciplines of the land. Together with your crewmates you pursue schemes and build a legend in the streets and fields of the Final Empire. <br/>
                <br/>
                Along the way you’ll face many enemies — scheming nobles, treacherous bandits, deadly hazekillers, vicious koloss, terrifying Inquisitors — all bent on putting an end to you and your efforts. But with teamwork, confidence, and a little bit of luck, your crew may just prevail, and so create a story to be told and remembered for ages to come...<br/><br/>

                To all first time readers, a word of warning: this supplement assumes you have completed the original Mistborn trilogy, and frequently refers to vital events in the first three Mistborn novels by way of history. Spoilers for the original trilogy abound, but we’ve done our best not to spoil The Alloy of Law itself. You’ve been warned, mateys!<br/>
                <div id='spoilers'>
                    <button className={spoilersVisible ? 'selected' : 'unselected'} onClick={toggleSpoilers}>
                        {spoilersVisible ? "Hide Spoilers" : "Reveal Spoilers"}
                    </button>
                </div>
                
                {spoilersVisible && (
                    <div id="spoiler">
                    <h1>To a World Remade</h1>
                        It has been 300 years since Scadrial was remade. 
                        <br/>
                        Three centuries ago, with the world teetering on the brink of annihilation brought about by the dark god Ruin, the humble Terris keeper Sazed took up the power of both Ruin and Preservation and became a new god — <span id='bold'>Harmony</span>. Drawing deeply from his knowledge of the beliefs and histories of the past, Harmony used the moment of this <span id='bold'>Final Ascension</span> to correct the catastrophic mistakes made by the Lord Ruler a thousand years before. He set the planet back in its proper orbit, correcting the climate and eliminating the need for constant ashfall to protect against the harsh rays of the sun. He rejuvenated the land and restored many plants and animals that had gone extinct. He created a region of bountiful land, and then ringed it with mighty mountain ranges to keep it safe from flood and drought. He made what few souls still lived — skaa, noble, Terrisman, kandra, and koloss alike — whole again and granted them his wisdom in his <span id='bold'>Words of Founding</span>. Then he set them free to rebuild what a thousand years of darkness and terror had destroyed. <br/> 
                        <br/>
                        This fresh start is known by modern Scadrians as the <span id='bold'>Origin</span>. The survivors of that apocalypse became the <span id='bold'>Originators</span>, the founding mothers and fathers of a new world, free to shape Scadrial into a place of new opportunities and horizons. <br/>
                        <br/>
                        They were under the leadership of Spook — now known as the <span id='bold'>Lord Mistborn</span>— who also made Vin, her beloved Elend, and the rest of Kelsier’s crew become the stuff of legend in this new society, their lives serving as lessons to be learned from and ideals to be aspired to. Things once lost — faith, self-determination, innovation, hope — returned to the world as the Originators carved out their destiny in this new land. The destiny of people of all stripes and species was determined not just by the circumstances of their birth, but by their skill, knowledge, and the merit of their ideas. Together, they founded religions, created laws, built cities, and made technological advances that radically transformed their society. <br/>
                        <br/>
                        Scadrial today is a much more modern and familiar world, similar to Earth at the dawn of the 20th century, during the last days of the Wild West, but with a distinct Mistborn twist. The great metropolis of <span id='bold'>Elendel</span> is the center of the civilized world and the seat of government, ringed by smaller towns and, further out, by a wild frontier. The citizens of Scadrial make their living as craftsmen, scholars, politicians, merchants, pioneers, bandits, and lawmen. Firearms, railroads, electric lights, horseless carriages, and even skyscrapers are now ever-present reminders of the ingenuity of man and the pace of an increasingly modern world. Men and women with the amazing powers of Allomancy and Feruchemy no longer need to live in secret, but are free to exercise their natural gifts to the betterment of themselves and others. Nobles with names like Ladrian, Tekiel, Cett, and Yomen still plot and scheme, daring criminals still prey on the weak, and Crews filled with Heroes still stand up to them. 
                        <br/>
                        So pull on your chaps, load up your vials, and strap on your six-shooters, because this an exciting new time for the world of Mistborn: the era of The Alloy of Law.
                    </div>
                )}
            </div>
        </div>
            
      </>
    )
  }
  
  export default Intro
  